import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InventoryService } from '../core/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  @Input() branchName: string = '<branch name>';
  // @Output() increased = new EventEmitter<number>();

  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
  }

  // increaseInventory(amount: string) {
  //   this.increased.emit(parseInt(amount));
  // }

  increaseInventory(amount: string) {
    this.inventoryService.addInventory(parseInt(amount));
  }
}