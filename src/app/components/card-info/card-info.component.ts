import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements OnInit {

  cards: any[];
  card: any;

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
    this.database.getCard().subscribe(
      res => {
        this.cards = res;
      }
    )
  }
}

