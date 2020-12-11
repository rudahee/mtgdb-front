import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardGalleryComponent } from './components/card-gallery/card-gallery.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardInfoComponent } from './components/card-info/card-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardGalleryComponent,
    CardInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
