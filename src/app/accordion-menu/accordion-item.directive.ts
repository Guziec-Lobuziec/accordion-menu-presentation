import { Directive, Input, TemplateRef } from '@angular/core';
import { AccordionService } from './accordion.service';

@Directive({
  selector: '[sbTemplate]'
})
export class AccordionItemDirective{

  @Input('level')
  set level(value){
    this.levelNumber = Number(value)
  }

  get level():number {
    return this.levelNumber
  }

  @Input('expandOnClick')
  set expandOnClick(value){
    this.expandOnClickBool = Boolean(value)
  }

  get expandOnClick():boolean {
    return this.expandOnClickBool
  }

  @Input('onlyOneExpanded')
  set onlyOneExpanded(value){
    this.onlyOneExpandedBool = Boolean(value)
  }

  get onlyOneExpanded():boolean {
    return this.onlyOneExpandedBool
  }

  private levelNumber: number
  private expandOnClickBool: boolean = true
  private onlyOneExpandedBool: boolean = true

  constructor(
    public templateRef: TemplateRef<any>
  ) { }

}
