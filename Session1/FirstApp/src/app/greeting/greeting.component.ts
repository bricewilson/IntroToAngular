import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  template: `
    <p>Welcome to the app. Today's date is {{ currentDate | date }}</p>
    <button [disabled]="disableButton" (click)="displayGreeting()">Show Greeting</button>
  `,
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    console.log('The GreetingComponent view has been initialized.');
  }

  ngOnInit(): void {
    console.log('The GreetingComponent has been initialized.');
  }

  currentDate = new Date();

  displayGreeting() {
    alert('Enjoy using the new app!');
  }

  disableButton = true;

}
