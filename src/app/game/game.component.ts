import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent {
  pickCardAnimation = false;
  game!: Game;

  constructor(){

  }

  ngOnInit(): void{ 
    this.newGame();
    console.log(this.game)
  }

  newGame(){
    this.game = new Game();
  }

  takeCard(){
    this.pickCardAnimation = true;
  }
}
