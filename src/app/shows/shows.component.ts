import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { WatchShowsService } from '../watch-shows.service';

@Component({
  selector: 'app-shows',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shows.component.html',
  styleUrl: './shows.component.css'
})
export class ShowsComponent implements OnInit {

  shows: any = []

  constructor(private activedroute: ActivatedRoute, private watchshow: WatchShowsService ){}

  ngOnInit(): void {
    this.watchshow.getShows().subscribe((res: any) =>{
     this.shows = res;
    })

  }
}
