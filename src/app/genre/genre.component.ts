import { Component, OnInit } from '@angular/core';
import { WatchMoviesService,Movie } from '../watch-movies.service';
import { WatchShowsService,Shows } from '../watch-shows.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { MediaItem } from '../types/media-item';


@Component({
  selector: 'app-genre',
  standalone: true,
  imports: [CommonModule,NgIf,RouterModule],
  templateUrl: './genre.component.html',
  styleUrl: './genre.component.css'
})
export class GenreComponent implements OnInit {

  genre: string = '';
  allMedia: MediaItem[] =[];

  constructor(private activatedRoute: ActivatedRoute, private watchmovies: WatchMoviesService, private watchshows: WatchShowsService ){}


  ngOnInit(): void{
    this.activatedRoute.paramMap.subscribe(params =>{
      this.genre = params.get('genreName') || ' ';
      
      this.watchmovies.getMovies().subscribe(movies => {
        const filteredMovies: MediaItem[] = movies.filter(movie => 

          movie.genres && movie.genres.some((g:string) =>g.toLowerCase() === this.genre.toLowerCase()
         )
        )
        .map(movies => ({...movies, type: 'movie' as const}));

        this.watchshows.getShows().subscribe( shows=> {
          const filteredShows :MediaItem[] = shows
          .filter(show =>
            show.genres && show.genres.some(g =>
              g.toLowerCase() === this.genre.toLowerCase()
            )
          )
          .map(shows =>({...shows, type: 'show' as const}));
          this.allMedia = this.shuffle([...filteredMovies, ...filteredShows]);
        });
      });
    });
  }

  shuffle(array: MediaItem[]): MediaItem[]{
    return array.sort(()=> Math.random() - 0.5);
  }

}
