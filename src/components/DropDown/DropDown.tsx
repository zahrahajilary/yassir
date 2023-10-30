import {filters} from '../ReservationList/types';
import {Option,SelectedFilters} from "./types";

const Dropdown: React.FC<{
    filter: filters;
    selected: SelectedFilters;
    onChange: (filter: filters, value: string) => void;
    label:string;
    options: Option[];
}> = ({filter, selected, onChange,label,options}) => {

  const optionRender = () => {
    return options.map(option =>
      <option value={option.value} key={option.value}>{option.label}</option>
    );
  };

  return (
    <label htmlFor={label}
      aria-label={`filter-${label}`}
      id={`label-${label}`}
      data-testid='label-test'>
      {label}
      <select value={selected[filter]}
        id={label}
        aria-labelledby={`label-${label}`}
        aria-label={`filter-${label}`}
        onChange={(e)=>onChange(filter,e.target.value)}
        className="
        block w-full mt-1 py-2 px-3 border
                 border-gray-300 bg-white rounded-md shadow-sm
                 focus:outline-none focus:ring-indigo-500
                 focus:border-indigo-500"
        // role='combobox'
      >
        {optionRender()}
      </select>
    </label>
  );
}
export default Dropdown