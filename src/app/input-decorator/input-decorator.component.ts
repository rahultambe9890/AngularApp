import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-decorator',
  templateUrl: './input-decorator.component.html',
  styleUrls: ['./input-decorator.component.css']
})
export class InputDecoratorComponent implements OnInit {


  @Input() child :string ;//here parent component is app.component
  Courses :string[] = [
    'HTML5', 'CSS3' , 'BootStrap' , 'Angular'
  ]
  posts=[
    {
      title:'Pam Tree',
      content: 'I love this tree'
    },
    {
      title:'mango tree',
      content:'i love this tree'
    }
  ]
  numbers= [
    {
      title : 'nums'
    },
    {
      content : '10 , 20 , 30 , 40 , 50'
    }
  ]
  
  constructor() { }

  ngOnInit() {
    console.log(this.child);
    console.log(this.Courses);
    
    
  }
}


