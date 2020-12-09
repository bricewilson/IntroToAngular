import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-book-library',
  template: `
    <h1>Hello shared library!</h1>
  `,
  styles: [
  ]
})
export class BookLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
