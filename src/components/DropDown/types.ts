import { filters } from '../commonTypes'

export interface Option {
    label: string;
    value: string;
}

export interface SelectedFilters {
    [key: string]: string;
}

export interface Props {
    filter: filters;
    selected: SelectedFilters;
    onChange: (filter: filters, value: string) => void;
    label:string;
    options: Option[];
}