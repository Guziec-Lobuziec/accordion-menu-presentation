import { BettingCategory } from './betting-category';

export interface BettingCategorySourceResponse {
  code:number
  description:string
  data:BettingCategory[]
}
