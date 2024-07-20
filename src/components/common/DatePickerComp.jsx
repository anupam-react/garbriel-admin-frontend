import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function DatePickerComp() {
   const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <DatePicker
        showIcon
        toggleCalendarOnIconClick
        dateFormat="dd/MM/yyyy"
        selected={startDate}
        className='rounded-md shadow border-none'
      onChange={(date) => setStartDate(date)}
    />
    </div>
  );
}