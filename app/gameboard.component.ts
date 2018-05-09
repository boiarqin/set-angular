import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CardComponent }  from './card.component';
import { Card } from './card';
import * as _ from 'lodash';


@Component({
    selector: 'game-board',
    template: `<set-card
                    *ngFor="let card of gameCards; let i = index"
                    #setCard
                    [card]="card"
                    [index]="i"
                    (cardClicked) = onCardClick($event)
                ></set-card>`
})
export class GameBoardComponent {
	@Input() gameCards: Card[];
    @Output() validSet = new EventEmitter();

    onCardClick(obj : any) : void{
        //if this card was already selected
        if (obj.selected){
            //remove it from selectedCards
            this.gameCards[obj.index].selected = false;
        }
        //if this card was not already selected
        else {
            let selectedCards = _.filter(this.gameCards, {selected: true});
            //if 3 cards are already selected, deselect all
            if (selectedCards.length === 3){
                _.forEach(selectedCards, _.partial(_.assign, _,  {selected: false}));
            }
            //make this card selected
            this.gameCards[obj.index].selected = true;

            //TODO: check if this is now a valid SET
            selectedCards = _.filter(this.gameCards, {selected: true});
            if (selectedCards.length === 3){
                var isASet = this.validate(selectedCards);
                if(isASet){
                    this.validSet.emit(selectedCards);
                }
                //else do nothing
            }
        }
    }

    validate(selectedCards : Card[]) : boolean {
        let isASet = false;
        
        let compareNumber = this.isAllTheSame(selectedCards, 'number') || this.isAllDifferent(selectedCards, 'number');
        let compareColor = this.isAllTheSame(selectedCards, 'color') || this.isAllDifferent(selectedCards, 'color');
        let compareShape = this.isAllTheSame(selectedCards, 'shape') || this.isAllDifferent(selectedCards, 'shape');
        let compareFill = this.isAllTheSame(selectedCards, 'fill') || this.isAllDifferent(selectedCards, 'fill');

        isASet = compareNumber && compareColor && compareShape && compareFill;

        console.log('VALID SET: ' + isASet);

        return isASet;
    }

    isAllTheSame(selectedCards : Card[], property : string) : boolean {
        let isAllTheSame = false;

        isAllTheSame = _.union(_.map(selectedCards, property)).length === 1;

        //console.log(property + ': ' + isAllTheSame);

        return isAllTheSame;
    }

    isAllDifferent(selectedCards : Card[], property : string) : boolean {
        let isAllDifferent = false;

        isAllDifferent = _.union(_.map(selectedCards, property)).length === 3;

        //console.log(property + ': ' + isAllDifferent);

        return isAllDifferent;
    }
    
}
