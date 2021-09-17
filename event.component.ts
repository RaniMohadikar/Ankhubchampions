import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  eventData = "";
  dateData = "";

  loginSuccess = false;

  eventList: any=[];

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(){
    let eventObj={
      eventName:this.eventData,
      eventDate:this.dateData
    }

    this.eventList.push(eventObj);
    
    this.clearForm();
  }
 
  clearForm(){
    this.eventData="";
    this.dateData=""
  }

}