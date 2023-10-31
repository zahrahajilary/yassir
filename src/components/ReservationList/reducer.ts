import { Action } from './types'
import { Reservation } from '../commonTypes'
import { data } from '../../data'
import { sortData, filterData, searchHandler } from '../../utils'

export const reducer = (state: Reservation[], action: Action) => {
  const { key, isAscending
    , filters, searchInput } = action.payload

  switch (action.type) {
  case 'SORT':{
    return sortData (state, { isAscending:isAscending as boolean, key: key as keyof Reservation })
  }

  case 'SEARCH':
  case 'UPDATE_FILTERS':
  {
    let results = data.reservations
    if (filters) {
      results = filterData(filters, results)
    }
    if (searchInput) {
      results = searchHandler(results, searchInput)
    }
    if (isAscending && key)
      results = sortData(results, {
        isAscending,
        key
      })
    return results
  }

  default:
    return state
  }
}



