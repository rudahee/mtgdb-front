import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Card } from 'src/assets/Card';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-update-card',
  templateUrl: './update-card.component.html',
  styleUrls: ['./update-card.component.css']
})
export class UpdateCardComponent implements OnInit {
  registerForm: FormGroup;
  card: Card

  constructor(private build: FormBuilder, private database: DatabaseService) {
    this.registerForm = this.build.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    image: ['', Validators.required],
    quote: ['', Validators.required]
  })
}

  ngOnInit(): void {
  }

  putCard(): void {
    this.card = this.registerForm.value;
    this.database.postCard(this.card).subscribe(
      response => {
        console.log(response)
      }
    )
  }
}
