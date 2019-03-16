import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionMenuComponent } from './accordion-menu/accordion-menu.component';
import { AccordionLevelComponent } from './accordion-level/accordion-level.component';
import { AccordionItemDirective } from './accordion-item.directive';

@NgModule({
  declarations: [
    AccordionMenuComponent,
    AccordionLevelComponent,
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
