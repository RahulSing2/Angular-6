import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
dyname:string ="Rahul";
myMethod(){
  return "My name is" + " " + this.dyname;
}
appStatus:boolean= false;
status1="Online";
status2="Offline";
}
