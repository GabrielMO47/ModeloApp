import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Usuarios', url: '/folder/Outbox', icon: 'paper-plane' },
    
  ];
 
  constructor() {}
}
