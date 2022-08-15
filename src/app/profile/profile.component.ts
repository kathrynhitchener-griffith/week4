import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private storage: StorageService) {}
  email = sessionStorage.getItem("email");
  username = sessionStorage.getItem("username");;
  birthdate = sessionStorage.getItem("birthdate");
  age = sessionStorage.getItem("age");
  
  ngOnInit(): void { 
    this.storage.checkLoginStatus();

   }

  update(){
    if(this.email != undefined && this.username != undefined &&  this.birthdate != undefined && this.age != undefined){
      sessionStorage.setItem('email', this.email)
      sessionStorage.setItem('username', this.username)
      sessionStorage.setItem('birthdate', this.birthdate)
      sessionStorage.setItem('age', this.age)
      console.log("details updated");
      alert("Details Updated");
    }
  }

}
