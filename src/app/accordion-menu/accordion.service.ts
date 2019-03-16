import { Injectable, QueryList } from '@angular/core';
import { BehaviorSubject, Observable, Subject} from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';
import { AccordionItemDirective } from './accordion-item.directive';

@Injectable()
export class AccordionService {

  private directivesSubject:BehaviorSubject<AccordionItemDirective[]>
  private expansionNotification:Subject<{onLevel:number, masterId:number}>

  constructor() {
    this.directivesSubject = new BehaviorSubject<AccordionItemDirective[]>([])
    this.expansionNotification = new Subject()
  }

  noticeChildrenExpanded(onLevel:number, masterId:number) {
    this.expansionNotification.next({onLevel:onLevel, masterId:masterId})
  }

  listenIfChildrenExpanded(onLevel:number, masterId:number):Observable<any> {
    return this.expansionNotification.pipe(
      filter(value => value.onLevel === onLevel && value.masterId === masterId)
    )
  }

  setAccordionItemsDirectives(directives: AccordionItemDirective[]) {
    this.directivesSubject.next(directives)
  }

  getAccordionItemsDirective(level:number):Observable<AccordionItemDirective> {
    return this.directivesSubject.pipe(
      map(list => list.find(dir => dir.level === level))
    )
  }

}
