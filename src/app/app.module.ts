import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { InputDecoratorComponent } from './input-decorator/input-decorator.component';
import { OutputDecoratorComponent } from './output-decorator/output-decorator.component';
import { AssiDatabindingComponent } from './assi-databinding/assi-databinding.component';
import { AssiInputdecoratorComponent } from './assi-inputdecorator/assi-inputdecorator.component';



@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    TwowaydatabindingComponent,
    CardComponent,
    InputDecoratorComponent,
    OutputDecoratorComponent,
    AssiDatabindingComponent,
    AssiInputdecoratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

