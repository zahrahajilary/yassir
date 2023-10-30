import {  Action } from "./types";
import {Reservation} from "../commonTypes";
import {data} from "../../data";
import {utils} from "../../utils";
export const reducer = (state: Reservation[], action: Action) => {
  const { key, isAscending
    ,filters,searchInput } = action.payload;

  switch (action.type) {
  case 'SORT':{
    return utils.sortData (state,{isAscending:isAscending as boolean,key: key as keyof Reservation})
  }
  case "SEARCH":
  case "UPDATE_FILTERS":
  {
    let results = data.reservations;
    if (filters) {
      results = utils.filterData(filters, results);
    }
    if (searchInput) {
      results = utils.searchHandler(results, searchInput);
    }
    if(isAscending && key)
      results = utils.sortData(results, {
        isAscending,
        key
      });
    return results
  }
  default:
    return state;
  }
};



