import { Component, OnInit } from '@angular/core';
import { AppBettingCategoryService } from './app-betting-category.service';
import { AccordionDataView } from './accordion-menu/accordion-data-view';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  data:AccordionDataView[]

  constructor(private service:AppBettingCategoryService) {}

  ngOnInit() {
    this.service.getCategoryData().subscribe(dataFeed => {
      this.data = dataFeed
    })
  }

}
