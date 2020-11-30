import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  template: `<p><i>this is an inline template</i></p>`,
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('The GreetingComponent has been initialized!');
  }

}
