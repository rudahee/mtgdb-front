import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { DatabaseService } from 'src/app/services/database.service';
import { Card } from 'src/assets/Card';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements OnInit {

  cards: any[];
  card: any = {};
  selectedId: number;

  constructor(private database: DatabaseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedId = +this.route.snapshot.paramMap.get('id');
    this.showCard();
  }

  showCard(): void {
    this.database.getCard(this.selectedId.toString()).subscribe(
      res => {
        this.card = res;
      }
    )
  }

  deleteCard(): void {
    this.database.deleteCardFromCardInfo(this.selectedId.toString()).subscribe(
    )
  }
}

