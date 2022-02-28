import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string='Saran';
  users=['Lakshmi','Triston','Timothy','Mirna','Patrick'];
  userDetails=[
     {name:'Alex',email:'alex@gmail.com',phone:123456789},
     {name:'Alan',email:'alan@gmail.com',phone:22222222},
     {name:'Bipin',email:'bipin@gmail.com',phone:33333333},
     {name:'esme',email:'esme@gmail.com',phone:444444444},
     {name:'gagan',email:'gagan@gmail.com',phone:55555555},
     


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
