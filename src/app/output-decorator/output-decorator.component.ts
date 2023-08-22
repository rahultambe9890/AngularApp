import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-output-decorator',
  templateUrl: './output-decorator.component.html',
  styleUrls: ['./output-decorator.component.css']
})
export class OutputDecoratorComponent implements OnInit {
  @Output() foodEvent:EventEmitter<string> = new EventEmitter<string>();
  fullName:string = 'Rahul Khandu Tambe'//parent component is app.component 
  constructor() { }

  ngOnInit() {
  }

  addToFood() {
    this.foodEvent.emit(this.fullName);
    
  }
}
