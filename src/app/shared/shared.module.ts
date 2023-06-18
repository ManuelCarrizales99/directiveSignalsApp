import { CommonModule } from '@angular/common';
import { CustomLabelDirective } from './directives/custom-label.directive';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CustomLabelDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomLabelDirective,
  ]
})
export class SharedModule { }
