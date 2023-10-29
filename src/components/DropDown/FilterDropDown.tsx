import React, {useMemo} from 'react';
import {allFilters, filters} from "../ReservationList/filters";



interface Option {
    label: string;
    value: string;
}

interface Props {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
}

interface SelectedFilters {
    [key: string]: string;
}

const Dropdown: React.FC<{
    filter: filters;
    selected: SelectedFilters;
    onChange: (filter: filters, value: string) => void;
    label:string
}> = ({filter, selected, onChange,label}) => {

    const options = useMemo(() => {
        return allFilters[filter].map(option =>
            <option value={option.value} key={option.value}>{option.label}</option>
        );
    }, [filter]);

    return (
        <label htmlFor={label} aria-label={`filter-${label}`}>
            {label}
        <select value={selected[filter]}
                id={label}
                onChange={(e)=>onChange(filter,e.target.value)}
                className="block w-full mt-1 py-2 px-3 border
                 border-gray-300 bg-white rounded-md shadow-sm
                 focus:outline-none focus:ring-indigo-500
                 focus:border-indigo-500">
            {options}
        </select>
        </label>
    );
}
export default Dropdown