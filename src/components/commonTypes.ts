export interface Customer {
    firstName: string;
    lastName: string;
}


export type SortKey =  keyof Reservation | 'firstName' | 'lastName';

export interface SortConfig {
    key:SortKey;
    isAscending: boolean;
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
