import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionMenuComponent, AccordionItemDirective } from './accordion-menu/accordion-menu.component';

@NgModule({
  declarations: [
    AccordionMenuComponent,
    AccordionItemDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccordionMenuComponent,
    AccordionItemDirective
  ]
})
export class AccordionMenuModule { }
