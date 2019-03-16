import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccordionDataView } from './accordion-menu/accordion-data-view';
import { tap, map, reduce } from 'rxjs/operators';
import { BettingCategorySourceResponse } from './betting-category-source-response';
import { BettingCategory } from './betting-category';

const dataSourceURL:string = "https://www.lionsbet.com/rest/market/categories"

@Injectable({
  providedIn: 'root'
})
export class AppBettingCategoryService {

  constructor(private http:HttpClient) { }

  getCategoryData():Observable<AccordionDataView[]> {

    let structureData =
      function(element:BettingCategory):
        (all:BettingCategory[]) => [AccordionDataView,BettingCategory[]] {

          return function(all):[AccordionDataView,BettingCategory[]] {
            return all.filter(item => item.parentCategory === element.categoryId)
               .sort((a,b) => a.sortOrder - b.sortOrder)
               .map(item => structureData(item))
               .reduce<[AccordionDataView,BettingCategory[]]>(
                 (acc,fun) => {
                   let tmp = fun(acc[1])
                   return [
                     {data: element, children: acc[0].children.concat(tmp[0])},
                     tmp[1]
                   ]
                 },
                 [{data: element, children: []},all]
               )
          }

    }

    return this.http.get<BettingCategorySourceResponse>(dataSourceURL).pipe(
      map(json => json.data),
      map(data => { return {
        st: data.filter(cat => cat.level === 1).map(structureData),
        nd: data.filter(cat => !(cat.level === 1))
      }}),
      map(semiStruc => semiStruc.st.reduce<[AccordionDataView[],BettingCategory[]]>(
        (acc,fun) => {
          let tmp = fun(acc[1])
          return [acc[0].concat(tmp[0]),tmp[1]]
        },
        [[],semiStruc.nd]
      )),
      map(final => final[0])
    )
  }
}
