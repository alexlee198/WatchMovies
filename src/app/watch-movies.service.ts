import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movies } from '../movie-data/movies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchMoviesService {

  url = "http://localhost:3000/movies"

  constructor(private http: HttpClient) { }

  getMovies():Observable<Array<Movies>>{
    return this.http.get<Array<Movies>>(this.url)
  }

}
