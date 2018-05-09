"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var _ = require("lodash");
/* TODO: move to server */
var CARD_NUMBERS = [1, 2, 3];
var CARD_COLORS = ['red', 'green', 'purple'];
var CARD_SHAPES = ['oval', 'diamond', 'squiggle'];
var CARD_FILLS = ['solid', 'striped', 'blank'];
var CARD_DECK = [];
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        for (var k = 0; k < 3; k++) {
            for (var m = 0; m < 3; m++) {
                CARD_DECK.push({
                    'number': CARD_NUMBERS[i],
                    'color': CARD_COLORS[j],
                    'shape': CARD_SHAPES[k],
                    'fill': CARD_FILLS[m]
                });
            }
        }
    }
}
var remainingCards = _.shuffle(CARD_DECK);
var gameCards = remainingCards.slice(0, 12);
remainingCards = remainingCards.slice(12);
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.cardNumbers = CARD_NUMBERS;
        this.cardColors = CARD_COLORS;
        this.cardShapes = CARD_SHAPES;
        this.cardFills = CARD_FILLS;
        this.cardDeck = remainingCards;
        this.gameCards = gameCards;
        this.scores = {
            player: 0,
            opponent: 0
        };
    }
    AppComponent.prototype.onValidSet = function (selectedCards) {
        //update score
        this.scores.player++;
        //update deck
        this.removeCardsFromBoard(selectedCards);
        this.addNewCardsToBoard();
    };
    AppComponent.prototype.removeCardsFromBoard = function (selectedCards) {
        _.pullAll(this.gameCards, selectedCards);
    };
    AppComponent.prototype.addNewCardsToBoard = function () {
        (_a = this.gameCards).push.apply(_a, this.cardDeck.slice(0, 3));
        this.cardDeck = this.cardDeck.slice(3);
        var _a;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<header></header>\n    \t\t\t<game-board\n    \t\t\t\t[gameCards]=\"gameCards\"\n    \t\t\t\t(validSet)=\"onValidSet($event)\"\n    \t\t\t\tclass=\"clearfix\"\n    \t\t\t></game-board>\n    \t\t\t<score-tray\n    \t\t\t\t[scores]=\"scores\"\n    \t\t\t\t[numRemaining]=\"cardDeck.length\"\n    \t\t\t></score-tray>\n    \t\t\t"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map