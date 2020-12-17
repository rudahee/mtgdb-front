import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Card } from 'src/assets/Card';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-delete-card',
  templateUrl: './delete-card.component.html',
  styleUrls: ['./delete-card.component.css']
})
export class DeleteCardComponent implements OnInit {
  registerForm: FormGroup;
  card: Card;

  constructor(private build: FormBuilder, private database: DatabaseService) {
    this.registerForm = this.build.group({
      id: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }
  deleteCard(): void {
    this.card = this.registerForm.value;
    this.database.deleteCard(this.card).subscribe(
      response => {
        console.log(response)
      }
    )
  }
}
