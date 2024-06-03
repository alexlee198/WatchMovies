import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WatchMoviesService } from '../watch-movies.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  movieSearch: any;
  watchmovies: any;
  movies: any[] =[];
  
  constructor(private watchMovies: WatchMoviesService ){}

searchMovies() {
    this.watchmovies.getMovies().subscribe((res: any) =>{
    this.movies = res.filter( (movie: { name: string; }) => movie.name.toLowerCase().includes(this.movieSearch));
    this.movieSearch = ""
    })
}

}



