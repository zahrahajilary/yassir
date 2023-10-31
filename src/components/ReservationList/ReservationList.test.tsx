
import React, { render, screen, within, fireEvent } from '@testing-library/react'
import ReservationList from './ReservationList'
import user from '@testing-library/user-event'
import { waitFor } from '@testing-library/react'

describe('checking reservationList functionality', () => {
  function renderReservationList() {
    return render(<ReservationList/>)
  }

  test('check the all filters exist in reservation List', async ()=> {
    const { container } = renderReservationList()
    const filter = await within(container).findAllByTestId('label-test')
    expect(filter.length).toBe(4)
  })

  test('check the table rendered', async () => {
    const { container } = renderReservationList()
    const table = await within(container).findByTestId('table-test')
    expect(table).toBeInTheDocument()
  })

  test('checking the search works ', async() => {
    const { container } = renderReservationList()

    await waitFor(async () => {
      const searchInput = await screen.findByRole('textbox') as HTMLInputElement
      expect(searchInput.value).toBe('')

      fireEvent.change(searchInput, { target:{ value:'Isa' } })
      expect(searchInput.value).toBe('Isa')

      const searchResult = await screen.findAllByText('Isa')
      expect(searchResult.length).toBe(1)

      fireEvent.change(searchInput, { target:{ value:'' } })
      const secondResult = container.querySelectorAll('tbody tr')
      expect(secondResult.length).toBe(20)
    })
  })


  test('combination search and filter', async () => {

    const { container } = renderReservationList()
    await waitFor(async () => {
      const searchInput = await screen.findByRole('textbox') as HTMLInputElement
      fireEvent.change(searchInput, { target:{ value:'shina' } })
      expect(searchInput.value).toBe('shina')

      const shiftFilter = await screen.findByLabelText('shift')
      const confirmedOption = await within(shiftFilter).findByText('lunch')
      user.selectOptions(shiftFilter, confirmedOption)
      let result = container.querySelectorAll('tbody tr')
      expect(result).toHaveLength(1)

      fireEvent.change(searchInput, { target:{ value:'' } })
      result = container.querySelectorAll('tbody tr')
      expect(result).toHaveLength(10)
    })
  })

  test('integration test for having two filters', async () => {

    const { container } = renderReservationList()
    await waitFor(async () => {
      const areaFilter = await screen.findByLabelText('area')
      let selectedValArea = await within(areaFilter).findByText('bar')
      user.selectOptions(areaFilter, selectedValArea)
      const statusFilter = await screen.findByLabelText('status')
      let selectedValStatus = await within(statusFilter).findByText('confirmed')
      user.selectOptions(statusFilter, selectedValStatus)
      let res = container.querySelectorAll('tbody tr')
      expect(res).toHaveLength(1)

      selectedValArea = await within(areaFilter).findByText('not selected')
      user.selectOptions(areaFilter, selectedValArea)
      res = container.querySelectorAll('tbody tr')
      expect(res).toHaveLength(2)

      selectedValStatus = await within(statusFilter).findByText('not selected')
      user.selectOptions(statusFilter, selectedValStatus)
      res = container.querySelectorAll('tbody tr')
      expect(res).toHaveLength(20)
    })

  })

  test('integration sort and filter', async () => {

    const { container } = renderReservationList()
    await waitFor(async () => {
      const shiftFilter = await screen.findByLabelText('shift')
      const selectedShift = await within(shiftFilter).findByText('dinner')
      user.selectOptions(shiftFilter, selectedShift)
      const nameLabel = await screen.findByText('first name')
      user.click(nameLabel)
      const res = container.querySelectorAll('tbody tr')
      expect(res).toHaveLength(4)

      user.click(nameLabel)
      expect(res[0].textContent).toContain('Dewain')
    })
  }
  )

  test('integration search and sort', async () => {
    const { container } = renderReservationList()
    const searchInput = await screen.findByRole('textbox') as HTMLInputElement
    fireEvent.change(searchInput, { target:{ value:'ra' } })
    const nameLabel = await screen.findByText('first name')
    let res = container.querySelectorAll('tbody tr')
    expect(res).toHaveLength(3)
    expect(res[1].textContent).toContain('Chris')

    fireEvent.click(nameLabel)
    res = container.querySelectorAll('tbody tr')
    expect(res[2].textContent).toContain('Chris')

    res = container.querySelectorAll('tbody tr')
    fireEvent.click(nameLabel)
    expect(res[0].textContent).toContain('Adelbert')
  })

  test('integration filter and sort ', async ()=> {

    await waitFor(async ()=>{
      const { container } = renderReservationList()
      const quantityLabel = await screen.findByText('quantity')
      const areaFilter = await screen.findByLabelText('area')
      const areaSelected = await within(areaFilter).findByText('bar')
      user.selectOptions(areaFilter, areaSelected)

      let result = container.querySelectorAll('tbody tr')
      expect(result[0].textContent).toContain('Yuri')

      fireEvent.click(quantityLabel)
      result = container.querySelectorAll('tbody tr')
      expect(result[0].textContent).toContain('1')
      fireEvent.click(quantityLabel)

      result = container.querySelectorAll('tbody tr')
      expect(result[0].textContent).toContain('10')
    })
  })
})
