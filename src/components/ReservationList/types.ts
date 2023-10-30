import {Reservation} from "../commonTypes";
export type FilterOption = {
    value: string;
    label: string;
};

type FilterOptions = FilterOption[];

export type AllFiltersType = {
    status: FilterOptions;
    shift: FilterOptions;
    area: FilterOptions;
    date:FilterOptions;
};

export type filters = 'status' | 'shift' |'area'|'date';


export interface Action {
    type: string;
    payload: {
        key?: SortKey | null;
        isAscending?:boolean;
        searchInput?:string;
        keySort?:string;
        filters?:{
            [key: string]: string;
        };
    };
}
export type SortKey =  keyof Reservation | 'firstName' | 'lastName';

