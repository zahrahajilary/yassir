import { AllFiltersType } from './ReservationList/types'

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
  date:[
    { value: '', label: 'not selected' },
    { value:'02.08.2018', label:'02.08.2018' },
    { value:'03.08.2018', label:'03.08.2018' },
    { value:'04.08.2018', label:'04.08.2018' },
    { value:'05.08.2018', label:'05.08.2018' },
    { value:'06.08.2018', label:'06.08.2018' },
    { value:'07.08.2018', label:'07.08.2018' },
    { value:'10.08.2018', label:'10.08.2018' },
    { value:'11.08.2018', label:'11.08.2018' },
    { value:'12.08.2018', label:'12.08.2018' },
    { value:'13.08.2018', label:'13.08.2018' },
    { value:'14.08.2018', label:'14.08.2018' },

  ]
}