import {Reservation, SortKey} from "../commonTypes";
export interface Props {
    body:Reservation[];
    handleSort: ( key:SortKey) => void;


}