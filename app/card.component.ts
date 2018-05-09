import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Card } from './card';

@Component({
    selector: 'set-card',
    template: `<div 
    				*ngIf="card"
    				[ngClass]="[
    					'set-card',
    					'card-' + card.color,
    					'card-' + card.number + '-' + card.shape + '-' + card.fill,
    					(card.selected ? 'selected' : '')
    				]"
    				(click)="onCardClick()"
    			>
    			</div>`
})
export class CardComponent {
	@Input() card: Card;
	@Input() index: number;
	@Output() cardClicked = new EventEmitter();
	onCardClick() {
		this.cardClicked.emit({
			index: this.index,
			selected: this.card.selected
		});

	}
}
