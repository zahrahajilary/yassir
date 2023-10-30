import {Customer, Reservation, SortConfig} from "../components/commonTypes";

export const dateString = (datetime: string)=>{
  const date = new Date(datetime);

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Adding 1 because months are zero-indexed
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes()
  return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day} ${hours < 10 ? '0' + hours : hours}:
  ${minutes < 10 ? '0' + minutes : minutes}`
}

export  const sortData=(data: Reservation[], sortConfig: SortConfig)=> {

  const { key, isAscending } = sortConfig;

  if (key === 'firstName' || key === 'lastName') {
    return data.sort((a, b) => {
      const nameA = a.customer[key as keyof Customer] as string;
      const nameB = b.customer[key as keyof Customer] as string;
      return isAscending ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA)
    })

  }  else if (typeof data[0][key as keyof Reservation] === 'string') {
    return data.sort((a, b) => {
      const stringA = a[key as keyof Reservation] as string;
      const stringB = b[key as keyof Reservation] as string;
      return isAscending ? stringA.localeCompare(stringB) : stringB.localeCompare(stringA);
    });
  } else if (typeof data[0][key as keyof Reservation] === 'number') {
    return data.sort((a, b) => {
      const numA = a[key as keyof Reservation] as number;
      const numB = b[key as keyof Reservation] as number;
      return isAscending ? numA - numB : numB - numA;

    })
  }
  return data;

}

type Filter = {[key: string]: string; }
export const filterData = (filter: Filter, data: Reservation[]) => {
  const { status, date, shift, area } = filter;
  return data.filter((reservation: Reservation) => {
    return (
      (status && status.length >1 ? reservation.status === status : true) &&
                (date && data.length >1  ? reservation.businessDate === date : true) &&
                (shift && shift.length >1  ? reservation.shift === shift : true) &&
                (area && area.length >1  ? reservation.area === area : true)
    );
  });
};

export const searchHandler =(data:Reservation[],searchTerm:string)=> {
  return data.filter((item) =>
    item.customer.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.customer.lastName.toLowerCase().includes(searchTerm.toLowerCase()))
}

// Debounce options