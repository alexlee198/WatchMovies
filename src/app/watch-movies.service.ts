import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../movie-data/movies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchMoviesService {

  private url = 'src/assets/movies.json';
 

  constructor(private http: HttpClient) { }

  getMovies():Observable<Array<Movie>>{
    return this.http.get<Array<Movie>>(this.url)
  }

}

export { Movie };
