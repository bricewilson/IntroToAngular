import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlerterService {

  constructor() { }

  warnUser(msg: string) {
    alert(`WARNING: ${msg}`);
  }
  
}
