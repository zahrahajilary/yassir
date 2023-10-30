import  React,{useState, useReducer, startTransition, useCallback} from "react";
import Table from "../table/Table";
import { data } from "../../data";
import {reducer} from "./reducer";
import {allFilters} from "../constant";
import {filters} from "./types";
import Dropdown from "../DropDown/DropDown";
import {SortKey} from "../commonTypes";


interface SelectedFilters {
    [key: string]: string;
}

function ReservationList(){

  const [state, dispatch] = useReducer(reducer, data.reservations);
  const [isAscending, setIsAscending] = useState<boolean>(true);
  const [searchInput, setSearchInput] = useState("");
  const [selected, setSelected] = useState<SelectedFilters>({});
  const [keySort, setKeySort]=useState<SortKey| null>(null);


  const handleChangeFilter = useCallback((filter: filters, value: string) => {
    const newVal = {
      ...selected,
      [filter]: value
    }
    setSelected(newVal);
    dispatch({
      type: 'UPDATE_FILTERS',
      payload: {
        filters: newVal,
        searchInput:searchInput,
        key:keySort,
        isAscending,

      }
    })
  }, [selected,searchInput]);

  const handleSort = (key: SortKey) => {
    dispatch({
      type: 'SORT',
      payload: {
        key: key,
        isAscending: isAscending,
      },
    });
    setIsAscending(!isAscending);
    setKeySort(key);
  };

  const handleDispatchSearch = (input: string) => {
    setSearchInput(input);
    dispatch({type: 'SEARCH',
      payload: {
        searchInput:input,
        filters:selected,
        key:keySort,
        isAscending,
      }})
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    startTransition(() => {
      handleDispatchSearch(input)
    });
  }
  return(
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> {/* Center content and set max width */}

        <div className="mt-8 flex flex-col md:flex-row md:items-center">

          <div className="flex flex-wrap gap-4">

            {Object.keys(allFilters).map(filter => (
              <div key={filter} className="w-full sm:w-auto">

                <Dropdown
                  filter={filter as filters}
                  selected={selected}
                  label={filter}
                  options={allFilters[filter as keyof typeof allFilters]}
                  onChange={handleChangeFilter}
                />

              </div>
            ))}

          </div>

          <div className="mt-4 w-full sm:w-auto md:ml-auto md:mt-0">

            <label className="block text-sm font-medium text-gray-700">Search</label>

            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                aria-label='search'
                role="textbox"
                id="search"
                value={searchInput}
                type="text"
                className="block w-full h-10 border border-gray-300 pr-10 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                onChange={handleSearchChange}
              />

            </div>

          </div>

        </div>

        <div className="mt-8">
          {/* Table */}   <Table body={state} handleSort={handleSort}/>
        </div>

      </div>
    </>

  )
}
export default ReservationList