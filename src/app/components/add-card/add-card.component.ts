import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Card } from 'src/assets/Card';
import { DatabaseService } from 'src/app/services/database.service';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
  registerForm: FormGroup;

  card: Card

  ngOnInit(): void {
  }

  constructor(private build: FormBuilder, private database: DatabaseService) {
    this.registerForm = this.build.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      quote: ['', Validators.required]
    })
  }

  postCard(): void {

    this.card = this.registerForm.value;
    this.database.postCard(this.card).subscribe(
      response => {
        console.log(response)
      }
    )
  }

}
