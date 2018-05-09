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
var ScoreTrayComponent = /** @class */ (function () {
    function ScoreTrayComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], ScoreTrayComponent.prototype, "scores", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ScoreTrayComponent.prototype, "numRemaining", void 0);
    ScoreTrayComponent = __decorate([
        core_1.Component({
            selector: 'score-tray',
            template: "<div class=\"score-tray-header\">\n                    <strong>Your score:</strong> {{scores.player}}\n                    <strong>Cards Remaining:</strong> {{numRemaining}}\n                    <!-- <strong>Opponent's score:</strong> {{scores.opponent}} -->\n                </div>"
        })
    ], ScoreTrayComponent);
    return ScoreTrayComponent;
}());
exports.ScoreTrayComponent = ScoreTrayComponent;
//# sourceMappingURL=scoretray.component.js.map