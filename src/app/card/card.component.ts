import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card', //selector in input-outputDecorator components
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() title = '';
@Input() content = '';
@Input() number = '';
  constructor() { }

  ngOnInit() {
    console.log(this.number);
    
  }

}
