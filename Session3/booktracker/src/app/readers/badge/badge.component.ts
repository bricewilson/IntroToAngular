import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styles: [
  ]
})
export class BadgeComponent implements OnInit {

  readerName: string = 'not set';

  constructor() { }

  ngOnInit(): void {
  }

  updateBadge(badge: string) {

  }

}
