import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.css']
})
export class EventbindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  msg:string=""
  addtocart(){
this.msg="Product add in cart."
  }
  
onInputClick(event:any){
  console.log(event.target.value); 
 }
 onAddCart(event:any){
this.msg=event.target.value + " " + "Add in Cart";
 }
 getInputInfo(Info:any){
   console.log(Info.value)
}

}
