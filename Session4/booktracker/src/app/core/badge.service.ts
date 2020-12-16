import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {

  private badgeSource = new Subject<string>();
  badge$ = this.badgeSource.asObservable();

  constructor() { }

  getReaderBadge(minutesRead: number): string {

    if (minutesRead > 5000) {
      return 'Book Worm';
    }
    else if (minutesRead > 2500) {
      return 'Page Turner';
    }
    else {
      return 'Getting Started';
    }
    
  }

  update(newBadge: string) {
    this.badgeSource.next(newBadge);
  }

}
