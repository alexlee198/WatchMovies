import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';
import { ShowsComponent } from './shows/shows.component';

export const routes: Routes = [

    {path:"movie", component: MovieComponent},
    {path:"", component: HomeComponent},
    {path:"shows", component:ShowsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutesModule{

  }