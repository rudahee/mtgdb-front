import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-card-gallery',
  templateUrl: './card-gallery.component.html',
  styleUrls: ['./card-gallery.component.css']
})
export class CardGalleryComponent implements OnInit {

  cards: any[];

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
    this.database.getAllCards().subscribe(
      res => {
        this.cards = res;
      }
    )
  }

  showCard(cardId: string): void {
    this.database.getCard(cardId).subscribe(() => {
    });
  }

}
