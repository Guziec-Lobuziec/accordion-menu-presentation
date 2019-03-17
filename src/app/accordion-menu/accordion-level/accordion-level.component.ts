import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { AccordionItemDirective } from '../accordion-item.directive';
import { AccordionService } from '../accordion.service';
import { AccordionDataView } from '../accordion-data-view';

@Component({
  selector: 'sb-accordion-level',
  templateUrl: './accordion-level.component.html',
  styleUrls: ['./accordion-level.component.scss']
})
export class AccordionLevelComponent implements OnInit {

  @Input() service:AccordionService
  @Input() item:AccordionDataView
  @Input() onLevelId:number
  @Input() level:number = 1
  @Input() parentId:number = 1

  directive:AccordionItemDirective

  currentLevelTemplate:TemplateRef<any>
  currentContex:any

  childrenExpanded:boolean = false

  expansionNotificationCreator:boolean = false

  constructor() { }

  onCurrentLevelElementClick() {
    if(this.directive.expandOnClick)
      this.toggleChildrenExpanded()
  }

  toggleChildrenExpanded() {
    
    this.childrenExpanded = !this.childrenExpanded
    this.updateContext()

    if(
      this.childrenExpanded &&
      this.directive.onlyOneExpanded &&
      !this.expansionNotificationCreator
    ){
      this.expansionNotificationCreator = true
      this.service.noticeChildrenExpanded(this.level, this.parentId)
    }
  }

  updateContext() {
    this.currentContex = {$implicit: this.item.data, expanded: this.childrenExpanded}
  }

  ngOnInit() {
    this.service.getAccordionItemsDirective(this.level).subscribe(directive => {
      this.directive = directive
      this.currentLevelTemplate = directive.templateRef
      this.updateContext()
    })

    this.service.listenIfChildrenExpanded(this.level, this.parentId).subscribe(value => {
      if(
        this.childrenExpanded &&
        this.directive.onlyOneExpanded &&
        !this.expansionNotificationCreator
      ){
        this.toggleChildrenExpanded()
      }
      this.expansionNotificationCreator = false
    })
  }

}
