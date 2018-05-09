import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class CardGameService {
	// Observable boolean sources
	private selectionAnnouncedSource = new Subject<boolean>();
	private selectionConfirmedSource = new Subject<boolean>();

	// Observable boolean streams
	selectionAnnounced$ = this.selectionAnnouncedSource.asObservable();
	selectionConfirmed$ = this.selectionConfirmedSource.asObservable();

	// Service message commands
	announceSelection(selected: boolean) {
		this.selectionAnnouncedSource.next(selected);
	}
	confirmSelection(selected: boolean) {
		this.selectionConfirmedSource.next(selected);
	}
}