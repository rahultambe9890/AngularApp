import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  name = 'Rahul';
  parentToChild:string = "I am coming from parent"; 
  fullName: string = '';
   

  onParent(value) {
    this.fullName = value; // Update the property with the emitted value
    console.log(value);
    
  }
}