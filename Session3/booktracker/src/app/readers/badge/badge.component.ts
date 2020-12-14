import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styles: [
  ]
})
export class BadgeComponent implements OnInit {

  @Input() readerName: string = 'not set';
  @Output() badgeChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  updateBadge(badge: string) {
    this.badgeChanged.emit(badge);
  }

}
