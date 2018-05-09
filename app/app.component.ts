import { Component } from '@angular/core';
import { Card } from './card';

import * as _ from 'lodash';

/* TODO: move to server */
const CARD_NUMBERS: number[] = [1, 2, 3];
const CARD_COLORS: string[] = ['red', 'green', 'purple'];
const CARD_SHAPES: string[] = ['oval', 'diamond', 'squiggle'];
const CARD_FILLS: string[] = ['solid', 'striped', 'blank'];

const CARD_DECK: Card[] = [];
for (let i=0; i < 3; i++){
	for (let j=0; j < 3; j++){
		for (let k=0; k < 3; k++){
			for (let m=0; m < 3; m++){
				CARD_DECK.push(
					{
						'number' : CARD_NUMBERS[i],
						'color' : CARD_COLORS[j],
						'shape' : CARD_SHAPES[k],
						'fill' : CARD_FILLS[m]
					}
				)
			}
		}
	}
}

let remainingCards = _.shuffle(CARD_DECK);
let gameCards = remainingCards.slice(0, 12);
remainingCards = remainingCards.slice(12);

@Component({
    selector: 'my-app',
    template: `<header></header>
    			<game-board
    				[gameCards]="gameCards"
    				(validSet)="onValidSet($event)"
    				class="clearfix"
    			></game-board>
    			<score-tray
    				[scores]="scores"
    				[numRemaining]="cardDeck.length"
    			></score-tray>
    			`
})

export class AppComponent {
	cardNumbers = CARD_NUMBERS;
	cardColors = CARD_COLORS;
	cardShapes = CARD_SHAPES;
	cardFills = CARD_FILLS;
	cardDeck = remainingCards;

	gameCards = gameCards;

	scores = {
		player: 0,
		opponent: 0
	};

	onValidSet(selectedCards : Card[]) : void {
		//update score
		this.scores.player++;

		//update deck
		this.removeCardsFromBoard(selectedCards);
		this.addNewCardsToBoard()
	}

	removeCardsFromBoard(selectedCards : Card[]) : void {
		_.pullAll(this.gameCards, selectedCards);
	}

	addNewCardsToBoard() : void {
		this.gameCards.push(...this.cardDeck.slice(0,3));
		this.cardDeck = this.cardDeck.slice(3);
	}
	
}