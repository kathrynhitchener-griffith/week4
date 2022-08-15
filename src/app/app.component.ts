import { Component } from '@angular/core';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private storage: StorageService) {}
  title = 'week4tut';
  logout(){
    this.storage.logout();
  }
}
