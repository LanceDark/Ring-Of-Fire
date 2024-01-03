import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})

export class StartScreenComponent {

  constructor(private router: Router){

  }

  newGame(){
    // start Game 
    console.log("Start Game");
    this.router.navigateByUrl('/game');
  }
}