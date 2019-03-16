import { Component, Input, ContentChildren, AfterContentInit, QueryList } from '@angular/core';
import { AccordionService } from '../accordion.service';
import { AccordionDataView } from '../accordion-data-view';
import { AccordionItemDirective } from '../accordion-item.directive';

@Component({
  selector: 'sb-accordion-menu',
  templateUrl: './accordion-menu.component.html',
  styleUrls: ['./accordion-menu.component.scss'],
  providers: [AccordionService]
})
export class AccordionMenuComponent implements AfterContentInit {

  @ContentChildren(AccordionItemDirective) accordionItemsDirectives: QueryList<AccordionItemDirective>

  @Input('value') items:AccordionDataView[]

  constructor(
    private service: AccordionService
  ) { }

  ngAfterContentInit() {
    this.service.setAccordionItemsDirectives(this.accordionItemsDirectives.toArray())
  }

}
