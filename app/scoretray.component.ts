import { Component, Input } from '@angular/core';


@Component({
    selector: 'score-tray',
    template: `<div class="score-tray-header">
                    <strong>Your score:</strong> {{scores.player}}
                    <strong>Cards Remaining:</strong> {{numRemaining}}
                    <!-- <strong>Opponent's score:</strong> {{scores.opponent}} -->
                </div>`
})
export class ScoreTrayComponent  {
	@Input() scores: number[];
	@Input() numRemaining: number;

}
