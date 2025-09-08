import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WatchMoviesService } from '../watch-movies.service';
import { Movie } from '../../movie-data/movies';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  movieSearch: string = '';
  watchmovies: any;
  movies: Movie[] = [];

  constructor(private router: Router ,private watchMovies: WatchMoviesService) {}

  searchMovies() {

    const trimmed = this.movieSearch.trim();
    // using trim to make sure there are no white spaces to cause errors.
     if (trimmed) {
    this.router.navigate(['/search', trimmed]);
    // using the route to navigate to the search result
    this.movieSearch = '';
  }
    // this.watchmovies.getMovies().subscribe((movies: Movie[]) => {
    //   this.movies = movies.filter(({ name }) =>
    //     name.toLowerCase().includes(this.movieSearch)
    //   );
    //   console.log(this.movies);
    //   this.movieSearch = '';
    // });
    
  }
}
