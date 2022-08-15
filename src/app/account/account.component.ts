import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private storage: StorageService) {}
  email = sessionStorage.getItem("email");
  username = sessionStorage.getItem("username");;
  birthdate = sessionStorage.getItem("birthdate");
  age = sessionStorage.getItem("age");

  ngOnInit(): void {
    this.storage.checkLoginStatus();
  }
}
