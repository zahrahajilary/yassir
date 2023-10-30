import  React,{useState, useReducer, startTransition, useCallback} from "react";
import Table from "../table/Table";
import { data } from "../../data";
import {reducer} from "./reducer";
import {allFilters, AllFiltersType, filters} from "./filters";
import Dropdown from "../DropDown/DropDown";
import {SortKey} from "./ReservationListInterface";

interface SelectedFilters {
    [key: string]: string;
}

interface Option {
    label: string;
    value: string;
}

function ReservationList(){

    const [state, dispatch] = useReducer(reducer, data.reservations);
    const [isAscending, setIsAscending] = useState<boolean>(true);
    const [searchInput, setSearchInput] = useState("");
    const [selected, setSelected] = useState<SelectedFilters>({});
    const [keySort, setKeySort]=useState<SortKey| null>(null);


    const handleChange = useCallback((filter: filters, value: string) => {
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

    const handleSearch = (input: string) => {
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
            setSearchInput(input);
            handleSearch(input);
        });
    }
    return(
        <>
            <div className='flex flex-row space-x-12'>
                {Object.keys(allFilters).map((filter)=>
                    <Dropdown
                        key={filter}
                        filter={filter as filters}
                        selected={selected}
                        label={filter}
                        options={allFilters[filter as keyof typeof allFilters]}
                        onChange={handleChange}/>
              )}

                <label aria-label="search input" htmlFor="search" className="text-gray-700 font-medium">
                    Search
                    <input
                        name='search'
                        id="search"
                        value={searchInput}
                        className="ml-2 border border-gray-400 p-2 rounded"
                        onChange={handleSearchChange}
                    />
                </label>
            </div>

            <Table body={state} handleSort={handleSort}/>
        </>
    )
}
export default ReservationList