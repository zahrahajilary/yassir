import { Reservation} from "../ReservationList/ReservationListInterface";
export interface Props {
    body:Reservation[];
    handleSort: ( key:string) => void;


}