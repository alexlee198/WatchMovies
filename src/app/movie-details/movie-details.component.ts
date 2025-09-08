import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Movie, WatchMoviesService } from '../watch-movies.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { SafePipe } from '../safe.pipe';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [NgIf,NgFor,RouterLink,CommonModule, SafePipe],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {

  movie!: Movie | undefined;
  recommendedMovies: Movie[] = [];

  constructor(private activatedRoute: ActivatedRoute, private movieService: WatchMoviesService){}

  private convertToEmbedUrl(url: string): string {
  return url.replace("watch?v=", "embed/");
}

  ngOnInit(): void {

     this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadMovie(id);
      }
    });
  }

  private loadMovie(id: string): void {
    this .movie = undefined;

    this.movieService.getMovies().subscribe(movies => {

      const foundMovie = movies.find(m => String(m.id) === id);

      if (foundMovie) {
        if (foundMovie.trailer) {
          foundMovie.trailer = this.convertToEmbedUrl(foundMovie.trailer);
        }

        this.movie = foundMovie;

        // Get recommended movies
        this.recommendedMovies = movies
          .filter(
            m =>
              m.id !== this.movie!.id &&
              m.genres.some(g => this.movie!.genres.includes(g))
          )
          .slice(0, 12);

          window.scrollTo({ top: 0, behavior: 'smooth' });
      }
        

      });

  }

}
