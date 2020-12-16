import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Book } from "src/app/models/book";
import { Reader } from "src/app/models/reader";
import { DataService } from 'src/app/core/data.service';
import { AlerterService } from '../core/alerter.service';
import { LoggerService } from '../core/logger.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  allBooks: Book[];
  allReaders: Reader[];
  mostPopularBook: Book;

  constructor(private dataService: DataService,
              private title: Title,
              private alerter: AlerterService,
              private logger: LoggerService) { }
  
  ngOnInit() {

    this.dataService.getAllBooks()
      .pipe(
        tap(books => console.log(books)),
      )
      .subscribe(
        books => this.allBooks = books,
        err => console.error(err),
        () => console.log('All done getting books')
      );
    this.dataService.getAllReaders()
      .subscribe(
        readers => this.allReaders = readers,
        err => console.error(err)
      );
    this.mostPopularBook = this.dataService.mostPopularBook;

    this.title.setTitle(`Book Tracker`);

    this.logger.log('Done initializaing the DashboardComponent.');
  }

  deleteBook(bookID: number): void {
    this.dataService.deleteBook(bookID)
      .subscribe(
        (data: void) => {
          let index: number = this.allBooks.findIndex(book => book.bookID === bookID);
          this.allBooks.splice(index, 1);
        },
        (err: any) => console.log(err)
      );
  }

  deleteReader(readerID: number): void {
    // console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
    this.alerter.warnUser('This feature has not yet been implemented.');
  }

}
