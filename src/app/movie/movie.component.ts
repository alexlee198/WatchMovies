import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { WatchMoviesService } from '../watch-movies.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, FormsModule ],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {

  movies: any = [];
  movieSearch: any;

 constructor(private activatedRoute: ActivatedRoute, private watchmovies: WatchMoviesService ){}

 
 ngOnInit(): void {
   this.watchmovies.getMovies().subscribe((res: any) =>{
    this.movies = res;
   })
 }

 searchMovies() {
  this.watchmovies.getMovies().subscribe((res: any) =>{
  this.movies = res.filter( (movie: { name: string; }) => movie.name.toLowerCase().includes(this.movieSearch));
  this.movieSearch = ""
  })
}

  }



 

