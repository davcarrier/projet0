import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { GameAreaComponent } from './game-area.component';
import { OpponentAreaComponent } from './opponent-area/opponent-area.component';
import { MatCardModule } from '@angular/material/card';
import { PlayerAreaComponent } from './player-area/player-area.component';
import { StageComponent } from './stage/stage.component';

@NgModule({
  declarations: [
    CardComponent,
    GameAreaComponent,
    OpponentAreaComponent,
    PlayerAreaComponent,
    StageComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    GameAreaComponent
  ]
})
export class GameAreaModule { }
