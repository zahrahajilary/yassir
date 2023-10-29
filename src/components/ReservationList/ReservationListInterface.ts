export interface Customer {
    firstName: string;
    lastName: string;
  }  

export interface Reservation {
    id: number;
    start: string;
    end:string;
    customer: Customer;
    businessDate:string;
    status:string;
    shift:string;
    quantity:number;
    area:string;
    guestNotes:string

  }

export interface Action {
    type: string;
    payload: {
        key?: string;
        isAscending?:boolean;
        searchInput?:string;
        filters?:{
            [key: string]: string;
        };
    };
}

export interface SortConfig {
    key: keyof Reservation | 'firstName' | 'lastName';
    isAscending: boolean;
}
