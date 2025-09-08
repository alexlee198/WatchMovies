import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { WatchMoviesService } from '../watch-movies.service';
import { WatchShowsService } from '../watch-shows.service';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgFor,RouterLink,NgbCarouselModule,MatButtonModule,MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit {

  movies: any;
  shows: any;



  constructor(
    private watchMovies: WatchMoviesService,
    private watchShows: WatchShowsService
  ) {}

  ngOnInit(): void {

    this.watchShows.getShows().subscribe((res: any) => {
      this.shows = res;
    });
      this.watchMovies.getMovies().subscribe((res: any) =>{
       this.movies = res;
      })

      this.watchMovies.getMovies().subscribe((res:any) =>{
        this.movies = res.filter((movie: any) => movie.featured === true);
      });

      this.watchShows.getShows().subscribe((res: any) =>{
        this.shows = res.filter((show:any) => show.featured === true);
      });

    }

    
  }