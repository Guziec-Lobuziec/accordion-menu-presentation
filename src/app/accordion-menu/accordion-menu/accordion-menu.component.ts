import { Component, OnInit, Directive, Input, ContentChildren, ViewContainerRef, TemplateRef, AfterContentInit, QueryList } from '@angular/core';
import { AccordionService } from '../accordion.service';

class AccordionDataView {
  data: any;
  child: AccordionDataView[];
}

@Directive({
  selector: '[sbTemplate]'
})
export class AccordionItemDirective {

  constructor(
    public templateRef: TemplateRef<any>,
    public viewContainer: ViewContainerRef
  ) { }

  @Input('sbTemplate') sbTemplateElementName: string;
  @Input() level: number;
  @Input() expandOnClick: boolean = true;
  @Input() onlyOneExpanded: boolean = true;

}

@Component({
  selector: 'sb-accordion-menu',
  templateUrl: './accordion-menu.component.html',
  styleUrls: ['./accordion-menu.component.scss'],
  providers: [AccordionService]
})
export class AccordionMenuComponent implements OnInit, AfterContentInit {

  @ContentChildren(AccordionItemDirective) accordionItems: QueryList<AccordionItemDirective>

  @Input('value') accordionData: AccordionDataView[]

  //template: TemplateRef<any>

  constructor(private service: AccordionService) { }

  ngAfterContentInit() {
    this.accordionItems.forEach(
      item => item.viewContainer
        .createEmbeddedView(item.templateRef, { $implicit: 'value' })
    )
  }

  ngOnInit() {

  }

}
