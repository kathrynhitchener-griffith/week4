import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}
// angular headers
import { Router } from '@angular/router';

const BACKEND_URL = 'http://localhost:3000';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router, private http: HttpClient) {}
  ngOnInit(): void {}
  userpwd = {username: "abcd", password: "4565"};
  username: string = "";
  password: string = "";
  error = false;

  public login(){
    console.log("Sending Request...")
    this.http.post(BACKEND_URL + '/login', 
    {
      "username": this.username,
      "password": this.password
    }
    , httpOptions)
    .subscribe((data: any) => {
      if(data.valid){
        console.log("valid response")
        sessionStorage.setItem('username', data.username)
        sessionStorage.setItem('birthdate', data.birthdate)
        sessionStorage.setItem('age', data.age.toString())
        sessionStorage.setItem('email', data.username)
        sessionStorage.setItem('loggedIn', "true");
        this.router.navigateByUrl('/account')
        console.log(sessionStorage.getItem('username'))
      }
      else{
        const error =  document.getElementById('errormsg');
        console.log("invalid")
        if(error !== null){
          error.classList.remove("hidemessage")
          error.classList.add("showmessage")
        }
      }
    })
  }
}
