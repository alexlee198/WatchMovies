import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shows } from './shows-data/tv-show';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchShowsService {

  url = "http://localhost:3000/shows"

  constructor(private http: HttpClient) { }

  getShows():Observable<Array<Shows>>{
    return this.http.get<Array<Shows>>(this.url)
  }

}

export { Shows };
