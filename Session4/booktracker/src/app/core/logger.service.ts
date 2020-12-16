import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(message: string) {
    const timeString: string = new Date().toLocaleTimeString();
    console.log(`${message} (${timeString})`);
  }
}
