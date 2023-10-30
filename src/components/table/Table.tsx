import React from 'react';
import {Props} from './TableInterface';
import {headers} from "./tableInfo";
import {dateString} from "../../utils";
import {SortKey} from "../ReservationList/ReservationListInterface";

function Table({body,handleSort}:Props) {

  return (
   <div className="flex justify-center m-24">
    <table className="table-auto border-collapse bg-white text-left text-sm text-gray-500 border-spacing-4 min-w-full"
           data-testid={'table-test'}>
      <thead>
        <tr className="space-x-4">
          {headers.map((item) => (
              <th key={item.key} onClick={() => handleSort(item.key as SortKey)}>
                {item.value}
              </th>))
          }
        </tr>
      </thead>
      <tbody>
        {body.map((item)=>{
            return(
                <tr className="space-x-8" key={item.id}>
                    <td>{item.customer.firstName}</td>
                    <td>{item.customer.lastName}</td>
                    <td>{item.businessDate}</td>
                    <td>{(item.area.toLowerCase())}</td>
                    <td>{(item.status.toLocaleLowerCase())}</td>
                    <td>{item.shift.toLocaleLowerCase()}</td>
                    <td>{dateString(item.start)}</td>
                    <td>{dateString(item.end)}</td>
                  <td>{item.quantity}</td>
                  <td>{item.guestNotes.length>1? item.guestNotes:'---'}</td>
                </tr>
            )
        })}
      </tbody>
    </table>
      </div>
  )
}
export default Table;
