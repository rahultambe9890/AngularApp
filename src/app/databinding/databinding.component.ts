import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  empcount;
  count:number = 0;
  data = {
    name : "rahul",
    department : "It",
    age : 24
  }
  constructor() {
    this.getDataFromServer()
    this.data 
   }

  ngOnInit() {
  }
  severID :number=2368979;



  getDataFromServer(){
    this.empcount = 100000;
  }

  currentTime(){
    let date = Date()
    return date
  }
  
  onbuttonclick(){
    let counts  = this.count += 1;
    console.log(counts);
    
  }
  onkeyup(value){
    console.log('$event',value.target.value);
    
  }
}
