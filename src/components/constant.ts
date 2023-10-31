import { AllFiltersType } from './ReservationList/types'
import { gettingDate } from "../utils"
import { data } from "../data"

export const headers = [
  { key:'firstName', value:'first name' },
  { key:'lastName', value:'last name' },
  { key:'businessDate', value:'business Date' },
  { key:'area', value:'area' },
  { key:'status', value:'status' },
  { key:'shift', value:'shift' },
  { key:'start', value:'start' },
  { key:'end', value:'end' },
  { key:'quantity', value:'quantity' },
  { key:'guestNotes', value:'guest notes' }
]
export const allFilters:AllFiltersType = {
  status: [
    { value: '', label: 'not selected' },
    { value: 'CHECKED OUT', label: 'check out' },
    { value: 'NOT CONFIRMED', label: 'not confirmed' },
    { value: 'SEATED', label: 'seated' },
    { value: 'CONFIRMED', label: 'confirmed' },
  ],
  shift:[
    { value: '', label: 'not selected' },
    { value:'LUNCH', label:'lunch' },
    { value:'BREAKFAST', label:'breakfast' },
    { value:'DINNER', label:'dinner' },
  ],
  area:[
    { value: '', label: 'not selected' },
    { value:'BAR', label:'bar' },
    { value:'MAIN ROOM', label:'main room' },
  ],
  date:[ { value: '', label: 'not selected' },
    ...gettingDate(data.reservations)]
}