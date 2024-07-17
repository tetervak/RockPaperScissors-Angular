import {Component, Input} from '@angular/core';
import {DatePipe} from "@angular/common";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    DatePipe,
    MatToolbar
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  today: Date
  @Input() name: string = "Sheridan College"

  constructor() {
    this.today = new Date()
  }
}
