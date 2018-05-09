"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var _ = require("lodash");
var GameBoardComponent = /** @class */ (function () {
    function GameBoardComponent() {
        this.validSet = new core_1.EventEmitter();
    }
    GameBoardComponent.prototype.onCardClick = function (obj) {
        //if this card was already selected
        if (obj.selected) {
            //remove it from selectedCards
            this.gameCards[obj.index].selected = false;
        }
        //if this card was not already selected
        else {
            var selectedCards = _.filter(this.gameCards, { selected: true });
            //if 3 cards are already selected, deselect all
            if (selectedCards.length === 3) {
                _.forEach(selectedCards, _.partial(_.assign, _, { selected: false }));
            }
            //make this card selected
            this.gameCards[obj.index].selected = true;
            //TODO: check if this is now a valid SET
            selectedCards = _.filter(this.gameCards, { selected: true });
            if (selectedCards.length === 3) {
                var isASet = this.validate(selectedCards);
                if (isASet) {
                    this.validSet.emit(selectedCards);
                }
                //else do nothing
            }
        }
    };
    GameBoardComponent.prototype.validate = function (selectedCards) {
        var isASet = false;
        var compareNumber = this.isAllTheSame(selectedCards, 'number') || this.isAllDifferent(selectedCards, 'number');
        var compareColor = this.isAllTheSame(selectedCards, 'color') || this.isAllDifferent(selectedCards, 'color');
        var compareShape = this.isAllTheSame(selectedCards, 'shape') || this.isAllDifferent(selectedCards, 'shape');
        var compareFill = this.isAllTheSame(selectedCards, 'fill') || this.isAllDifferent(selectedCards, 'fill');
        isASet = compareNumber && compareColor && compareShape && compareFill;
        console.log('VALID SET: ' + isASet);
        return isASet;
    };
    GameBoardComponent.prototype.isAllTheSame = function (selectedCards, property) {
        var isAllTheSame = false;
        isAllTheSame = _.union(_.map(selectedCards, property)).length === 1;
        //console.log(property + ': ' + isAllTheSame);
        return isAllTheSame;
    };
    GameBoardComponent.prototype.isAllDifferent = function (selectedCards, property) {
        var isAllDifferent = false;
        isAllDifferent = _.union(_.map(selectedCards, property)).length === 3;
        //console.log(property + ': ' + isAllDifferent);
        return isAllDifferent;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], GameBoardComponent.prototype, "gameCards", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], GameBoardComponent.prototype, "validSet", void 0);
    GameBoardComponent = __decorate([
        core_1.Component({
            selector: 'game-board',
            template: "<set-card\n                    *ngFor=\"let card of gameCards; let i = index\"\n                    #setCard\n                    [card]=\"card\"\n                    [index]=\"i\"\n                    (cardClicked) = onCardClick($event)\n                ></set-card>"
        })
    ], GameBoardComponent);
    return GameBoardComponent;
}());
exports.GameBoardComponent = GameBoardComponent;
//# sourceMappingURL=gameboard.component.js.map