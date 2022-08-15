import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private router : Router, ) { }

  // checks if a current user is logged in
  checkLoginStatus(){
    if(sessionStorage.getItem("loggedIn") !== "true"){
      alert("Please login to continue");
      this.router.navigateByUrl('/login')
    }
  }

  logout(){
    sessionStorage.clear()
    alert("Successfully logged out");
    this.router.navigateByUrl('/login')
  }


}
