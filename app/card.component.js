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
var card_1 = require("./card");
var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.cardClicked = new core_1.EventEmitter();
    }
    CardComponent.prototype.onCardClick = function () {
        this.cardClicked.emit({
            index: this.index,
            selected: this.card.selected
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", card_1.Card)
    ], CardComponent.prototype, "card", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], CardComponent.prototype, "index", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "cardClicked", void 0);
    CardComponent = __decorate([
        core_1.Component({
            selector: 'set-card',
            template: "<div \n    \t\t\t\t*ngIf=\"card\"\n    \t\t\t\t[ngClass]=\"[\n    \t\t\t\t\t'set-card',\n    \t\t\t\t\t'card-' + card.color,\n    \t\t\t\t\t'card-' + card.number + '-' + card.shape + '-' + card.fill,\n    \t\t\t\t\t(card.selected ? 'selected' : '')\n    \t\t\t\t]\"\n    \t\t\t\t(click)=\"onCardClick()\"\n    \t\t\t>\n    \t\t\t</div>"
        })
    ], CardComponent);
    return CardComponent;
}());
exports.CardComponent = CardComponent;
//# sourceMappingURL=card.component.js.map