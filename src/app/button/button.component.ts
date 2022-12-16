import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  action:any


  ngOnInit(): void {
    {




     }
  }
  constructor(private api:ApiService){}
 allumer(){
   this.api.allumer().subscribe(
    d =>console.log(d),

  )
  setTimeout(() => {
    this.get();
  },1000)
 }


 eteindre(){
  this.api.eteindre().subscribe(
    d =>console.log(d),
    (error)=>console.log(error)
  )
  setTimeout(() => {
    this.get();
  },1000)
 }


 get(){
  this.api.get().subscribe(
  result=>this.action=Object.values(result)


  )

 }


}



