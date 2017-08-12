import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from "@angular/router";

import { GameComponent } from './components/game/game.component';

const routes: Array<Route> =[
  {
    path: 'game',
    component: GameComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)    
  ],
  declarations: [GameComponent]
})
export class GameModule { }
