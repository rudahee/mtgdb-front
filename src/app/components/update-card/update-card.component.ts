import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-update-card',
  templateUrl: './update-card.component.html',
  styleUrls: ['./update-card.component.css']
})
export class UpdateCardComponent implements OnInit {

  constructor(private database: DatabaseService) { }
  card = {
    "id": null,
    "name": null,
    "image": null,
    "quote": null
  }

  ngOnInit(): void {
  }
  putCard(): void {

    this.database.putCard(this.card).subscribe()
  }
}
