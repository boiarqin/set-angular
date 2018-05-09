"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var CardGameService = /** @class */ (function () {
    function CardGameService() {
        // Observable boolean sources
        this.selectionAnnouncedSource = new Subject_1.Subject();
        this.selectionConfirmedSource = new Subject_1.Subject();
        // Observable boolean streams
        this.selectionAnnounced$ = this.selectionAnnouncedSource.asObservable();
        this.selectionConfirmed$ = this.selectionConfirmedSource.asObservable();
    }
    // Service message commands
    CardGameService.prototype.announceSelection = function (selected) {
        this.selectionAnnouncedSource.next(selected);
    };
    CardGameService.prototype.confirmSelection = function (selected) {
        this.selectionConfirmedSource.next(selected);
    };
    CardGameService = __decorate([
        core_1.Injectable()
    ], CardGameService);
    return CardGameService;
}());
exports.CardGameService = CardGameService;
//# sourceMappingURL=selection.service.js.map