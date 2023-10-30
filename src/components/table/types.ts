import {Reservation, SortKey} from "../ReservationList/ReservationListInterface";
export interface Props {
    body:Reservation[];
    handleSort: ( key:SortKey) => void;


}