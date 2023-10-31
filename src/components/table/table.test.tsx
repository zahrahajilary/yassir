import { screen, render } from '@testing-library/react'
import user from '@testing-library/user-event'
import Table from './Table'
import React from 'react'

const body = [{
  id: 2,
  businessDate: '05.08.2018',
  status: 'NOT CONFIRMED',
  shift: 'BREAKFAST',
  start: '2018-08-05T08:00:00Z',
  end: '2018-08-05T09:00:00Z',
  quantity: 2,
  customer: {
    firstName: 'Arvie',
    lastName: 'Thurlbourne'
  },
  area: 'BAR',
  guestNotes: ''
},
{
  id: 3,
  businessDate: '04.08.2018',
  status: 'NOT CONFIRMED',
  shift: 'LUNCH',
  start: '2018-08-04T16:00:00Z',
  end: '2018-08-04T16:45:00Z',
  quantity: 9,
  customer: {
    firstName: 'Isa',
    lastName: 'Pearsey'
  },
  area: 'BAR',
  guestNotes: ''
}]
const sort = jest.fn()
function renderTable() {
  return render(<Table body={body} handleSort={sort}/>)

}
describe('table test', ()=>{
  test('render table', ()=>{
    renderTable()
    const tableRows = screen.getAllByRole('row')
    expect(tableRows.length).toBe(3)
  })
  test('check element is exist in table', ()=>{
    renderTable()
    const statusCheck = screen.getAllByText('not confirmed')
    expect(statusCheck.length).toBe(2)
  })
  test('check Name sort it works', ()=>{
    const { container } = renderTable()
    const element = screen.getByText('first name')
    user.click(element as Element)
    let rowSorted = container.querySelectorAll('tbody tr')
    expect(rowSorted[0].textContent).toContain('Arvie')
    expect(rowSorted[1].textContent).toContain('Isa')
    user.click(element as Element)
    rowSorted = container.querySelectorAll('tbody tr')
    expect(rowSorted[1].textContent).toContain('Isa')
    expect(rowSorted[0].textContent).toContain('Arvie')
  })
})
