import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CardGalleryComponent } from './components/card-gallery/card-gallery.component';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { AddCardComponent } from './components/add-card/add-card.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'gallery', component: CardGalleryComponent },
  { path: 'card/:id', component: CardInfoComponent },
  { path: 'add-card', component: AddCardComponent },
  { path: 'home', component: HomeComponent},
  { path: '',   redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})


export class AppRoutingModule { }
