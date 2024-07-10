import { Component } from '@angular/core';
import {GameData} from "../game-data";
import {GameService} from "../game.service";
import {GameResult} from "../game-result";
import {RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  gameData: GameData

  constructor(private gameService: GameService) {
    this.gameData = gameService.gameData;
  }

  replay(): void {
    this.gameService.reset()
  }

  protected readonly GameResult = GameResult;
}
