import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinechartComponent } from './linechart/linechart.component';



@NgModule({
  declarations: [
    LinechartComponent
  ],
  exports: [
    LinechartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChartModule { }
