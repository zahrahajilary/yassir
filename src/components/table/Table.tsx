import React from 'react'
import { Props } from './types'
import { headers } from '../constant'
import { dateString } from '../../utils'
import { SortKey } from '../commonTypes'

function Table({ body, handleSort }:Props) {

  return (
    <div className="flex justify-center space-y-8">
      <div className="overflow-x-auto">
        <table className="table-auto w-full border bg-white rounded text-left text-sm text-gray-500" data-testid={'table-test'}>
          <thead>
            <tr className="bg-gray-50">
              {headers.map((item) => (
                <th
                  key={item.key}
                  onClick={() => handleSort(item.key as SortKey)}
                  className="px-6 py-3 cursor-pointer"
                >
                  {item.value}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-x divide-gray-200">
            {body.map((item) => {
              return (
                <tr className="bg-white" key={item.id}>
                  <td className="px-6 py-4">{item.customer.firstName}</td>
                  <td className="px-6 py-4">{item.customer.lastName}</td>
                  <td className="px-6 py-4">{item.businessDate}</td>
                  <td className="px-6 py-4">{item.area.toLowerCase()}</td>
                  <td className="px-6 py-4">
                    {item.status.toLocaleLowerCase()}
                  </td>
                  <td className="px-6 py-4">
                    {item.shift.toLowerCase()}
                  </td>
                  <td className="px-6 py-4">{dateString(item.start)}</td>
                  <td className="px-6 py-4">{dateString(item.end)}</td>
                  <td className="px-6 py-4">{item.quantity}</td>
                  <td className="px-6 py-4">
                    {item.guestNotes.length > 1 ? item.guestNotes : '---'}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

    </div>
  )
}
export default Table
