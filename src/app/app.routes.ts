import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';
import { ShowsComponent } from './shows/shows.component';
import { GenreComponent } from './genre/genre.component';
import { SearchResultComponent } from './search-result.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

export const routes: Routes = [

    {path: "movie", component: MovieComponent},
    {path: "movies/:id",component:MovieDetailsComponent},
    {path: "", component: HomeComponent},
    {path: "shows", component:ShowsComponent},
    {path: "shows/:id", component:ShowDetailsComponent},
    {path: "genre/:genreName", component:GenreComponent},
    {path: "search/:term", component:SearchResultComponent},

    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutesModule{

  }