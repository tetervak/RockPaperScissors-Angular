import { Component } from '@angular/core';
import {GameService} from "../game.service";
import {Choice} from "../choice";
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    RouterLink, FormsModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  userChoice: Choice;

  constructor(private gameService: GameService) {
    this.userChoice = gameService.gameData.userChoice
  }

  protected readonly Choice = Choice;

  setUserChoice(choice: Choice): void {
    console.log("setUserChoice() is called")
    console.log("choice = " + choice)
    this.userChoice = choice;
  }

  play(): void {
    console.log("play() is called")
    console.log("this.userChoice = " + this.userChoice)
    this.gameService.play(this.userChoice);
  }
}
