import { Reservation, Action } from "./ReservationListInterface";
import {data} from "../../data";
import {sortData,filterData} from "../../utils";


export const reducer = (state: Reservation[], action: Action) => {
    const { key, isAscending,filters } = action.payload;
    switch (action.type) {
        case 'SORT':{
            const sortedData =
            sortData (state,{isAscending:isAscending as boolean,key: key as keyof Reservation})
            return [...sortedData]
        }

        case "SEARCH":{
            const { searchInput } = action.payload;
            if (!searchInput) {
                const csData = filters && filterData(filters ,data.reservations) ?
                    filterData(filters,data.reservations) : data.reservations;
                // Reset to initial state if search input is empty
                return csData
            } else {
                console.log( filters &&[... filterData(filters ,data.reservations)],'')
               const csData = filters && filterData(filters ,data.reservations) ?
                   filterData(filters,data.reservations) : data.reservations;
               console.log(csData,'cs data')
                return csData.filter((item) =>
                    item.customer.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
                    item.customer.lastName.toLowerCase().includes(searchInput.toLowerCase())
                )
            }
        }

        case "UPDATE_FILTERS":{

            const filteredDate = filters && filterData(filters ,data.reservations)
            return filteredDate ? [...filteredDate]:[...data.reservations]
        }

        default:
            return state;
    }
};



