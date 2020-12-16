import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BadgeService } from 'src/app/core/badge.service';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styles: [
  ]
})
export class BadgeComponent implements OnInit {

  @Input() readerName: string = 'not set';
  @Output() badgeChanged = new EventEmitter<string>();

  constructor(private badgeService: BadgeService) { }

  ngOnInit(): void {
  }

  updateBadge(badge: string) {
    // this.badgeChanged.emit(badge);
    this.badgeService.update(badge);
  }

}
