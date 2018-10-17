import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'header-app';
  username: string;
  email: string;
constructor() {
  this.username = 'Yash Mundra';
  this.email = 'yash.mundra@bdb';
}
}
