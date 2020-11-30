import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First Angular App';
  hideTitle = false;

  logMessage() {
    console.log('This is a message from the AppComponent.');
  }
}
