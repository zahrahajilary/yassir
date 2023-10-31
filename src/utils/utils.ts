import { Customer, Reservation, SortConfig } from '../components/commonTypes'
import {Filter} from '../components/commonTypes'

export const dateString = (datetime: string)=>{
  const date = new Date(datetime)
  return date.toLocaleDateString()
}

export const sortData = (data: Reservation[], sortConfig: SortConfig)=> {
  const { key, isAscending } = sortConfig
  if (key === 'firstName' || key === 'lastName') {
    return data.sort((a, b) => {
      const nameA = a.customer[key as keyof Customer] as string
      const nameB = b.customer[key as keyof Customer] as string
      return isAscending ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA)
    })

  } else if (typeof data[0][key as keyof Reservation] === 'string') {
    return data.sort((a, b) => {
      const stringA = a[key as keyof Reservation] as string
      const stringB = b[key as keyof Reservation] as string
      return isAscending ? stringA.localeCompare(stringB) : stringB.localeCompare(stringA)
    })

  } else if (typeof data[0][key as keyof Reservation] === 'number') {
    return data.sort((a, b) => {
      const numA = a[key as keyof Reservation] as number
      const numB = b[key as keyof Reservation] as number
      return isAscending ? numA - numB : numB - numA
    })
  }
  return data
}

export const filterData = (filter: Filter, data: Reservation[]) => {
  const { status, date, shift, area } = filter
  return data.filter((reservation: Reservation) => {
    return (
      (status && status.length > 1 ? reservation.status === status : true) &&
                (date && data.length > 1 ? reservation.businessDate === date : true) &&
                (shift && shift.length > 1 ? reservation.shift === shift : true) &&
                (area && area.length > 1 ? reservation.area === area : true)
    )
  })
}

export const searchHandler = (data:Reservation[], searchTerm:string)=> {
  return data.filter((item) =>
    item.customer.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.customer.lastName.toLowerCase().includes(searchTerm.toLowerCase()))
}
