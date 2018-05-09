import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import * as _ from 'lodash';

import { AppComponent }  from './app.component';
import { AppHeader }  from './header.component';
import { CardComponent }  from './card.component';
import { GameBoardComponent }  from './gameboard.component';
import { ScoreTrayComponent }  from './scoretray.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, AppHeader, CardComponent, GameBoardComponent, ScoreTrayComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
