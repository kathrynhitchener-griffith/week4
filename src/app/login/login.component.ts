import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router) {}
  ngOnInit(): void {}

  email: string = "";
  password: string = "";
  error = false;

  users = [
    {'email' : 'kat@email.com','pwd':'123'},
    {'email' : 'emma@email.com','pwd':'234'},
    {'email' : 'naomi@email.com','pwd':'345'}]


  login(){
    let valid = false;
    // loop over all customers and check credentials
    for(let i = 0; i < this.users.length; i++){
        if(this.email == this.users[i].email && this.password == this.users[i].pwd){
            valid = true;
        }
    }
    const error =  document.getElementById('errormsg');
    if(valid){
      console.log("valid")
      this.router.navigateByUrl('/account')
    }
    else{
      console.log("invalid")
      if(error !== null){
        error.classList.remove("hidemessage")
        error.classList.add("showmessage")
      }
    }
  }
}
