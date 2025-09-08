import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WatchShowsService } from '../watch-shows.service';
import { Shows } from '../shows-data/tv-show';
import { CommonModule, NgIf } from '@angular/common';
import { SafePipe } from '../safe.pipe';

@Component({
  selector: 'app-show-details',
  standalone: true,
  imports: [CommonModule,NgIf,RouterLink,SafePipe],
  templateUrl: './show-details.component.html',
  styleUrl: './show-details.component.css'
})
export class ShowDetailsComponent implements OnInit{

  show!: Shows | undefined;
  recommendedShows: Shows[] = [];

  constructor(private activatedRoute: ActivatedRoute, private showService:WatchShowsService) {}

  

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadShow(id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  private convertToEmbedUrl(url: string): string {
    return url.replace("watch?v=", "embed/");
  }


   private loadShow(id: string): void {
    this.showService.getShows().subscribe((shows: Shows[]) => {
      const found = shows.find(s => s.id.toString() === id);
      if (found) {
        if (found.trailer) {
          found.trailer = this.convertToEmbedUrl(found.trailer);
        }
        this.show = found;

        this.recommendedShows = shows
          .filter(s => s.id !== found.id && s.genres.some(g => found.genres.includes(g)))
          .slice(0, 12);
      }
    });

  }



}
