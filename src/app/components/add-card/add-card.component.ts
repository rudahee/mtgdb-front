import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
  card = {
    "name": null,
    "image": null,
    "quote": null
  }

  ngOnInit(): void {
  }

  constructor(private database: DatabaseService) { }

  postCard(): void {

    this.database.postCard(this.card).subscribe()
  }

}
