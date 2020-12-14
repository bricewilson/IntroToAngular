import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { DataService } from '../core/data.service';
import { allBooks, allReaders } from 'src/app/data';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  totalBookCount: number;
  allBooks: Book[];
  branch: string = 'Midtown';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.allBooks = allBooks;
    this.totalBookCount = this.allBooks.length;
  }

  onIncrease(amount: number) {
    this.totalBookCount += amount;
  }

}
