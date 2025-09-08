import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { WatchMoviesService } from './watch-movies.service';
import { WatchShowsService } from './watch-shows.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MediaItem } from './types/media-item';



@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf,RouterModule],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent  implements OnInit{

  searchTerm: string = '';
  searchResults: MediaItem[] = [];

  constructor( private activedRoute: ActivatedRoute, private watchmovie: WatchMoviesService, private watchshow: WatchShowsService ){}


  ngOnInit(): void {
  this.activedRoute.paramMap.subscribe((params) => {
    this.searchTerm = (params.get('term') || '').toLowerCase();
    this.loadSearchResults();
  });
}

loadSearchResults(): void {
  this.watchmovie.getMovies().subscribe(movies => {
    const matchedMovies: MediaItem[] = movies
      .filter(movie => 
        movie.name.toLowerCase().includes(this.searchTerm) ||
        movie.genres.some(g => g.toLowerCase().includes(this.searchTerm))
      )
      .map(movie => ({ ...movie, type: 'movie' as const }));

    this.watchshow.getShows().subscribe(shows => {
      const matchedShows: MediaItem[] = shows
        .filter(show =>
          show.name.toLowerCase().includes(this.searchTerm) ||
          show.genres.some(g => g.toLowerCase().includes(this.searchTerm))
        )
        .map(show => ({ ...show, type: 'show' as const }));

      this.searchResults = this.shuffle([...matchedMovies, ...matchedShows]);
    });
  });
}

shuffle(array: MediaItem[]): MediaItem[] {
  return array.sort(() => Math.random() - 0.5);
}

}
