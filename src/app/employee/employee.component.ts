import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
    displayVal:string='';
    count=0;
    name='Saran';
    disable=false;
    getValue(val:string){
       console.log(val);
       this.displayVal=val;
    }
    counter(type:string){
      type==='add'?this.count++:this.count--;
    }

    getData(data:NgForm){
      console.log(data)
    }
  constructor() { }

  ngOnInit(): void {
  }

}
