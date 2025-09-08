import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { WatchMoviesService } from '../watch-movies.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, FormsModule, NgFor,RouterModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {

  movies: any [] = [];
  movieSearch: any;
  currentPage: number = 1;
  itemsPerPage: number = 40;


 constructor(private activatedRoute: ActivatedRoute, private watchmovies: WatchMoviesService ){}

 
 ngOnInit(): void {
   this.watchmovies.getMovies().subscribe((res: any) =>{
    this.movies = res;
   })
 }

 searchMovies() {
    const searchTerm = this.movieSearch.toLowerCase();


  this.watchmovies.getMovies().subscribe((res: any) => {
    this.movies = res.filter((movie: any) => movie.name.toLowerCase().includes(searchTerm) || 
      movie.genres.some((genre: string) => genre.toLowerCase().includes(searchTerm)));
        this.movieSearch = ""
  })
}

  get paginatedMovies() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.movies.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.movies.length / this.itemsPerPage);
  }

}



 

