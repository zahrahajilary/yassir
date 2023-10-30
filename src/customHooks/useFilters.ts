import {useState} from "react";
export  function useFilters() {
  const [status, setStatus] = useState('');
  const [date, setDate] = useState('');
  const [area,setArea]=useState('');
  const [shift,setShift]=useState('')

  return {
    status, setStatus,
    date, setDate,
    area,setArea,
    shift,setShift
  }
}
