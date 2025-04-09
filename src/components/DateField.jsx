import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import '../styles/DateField.css';


function DateField({ label, value, onChange }) {
  const [selectedDate, setSelectedDate] = useState(value || null);

  const handleChange = (date) => {
    setSelectedDate(date);
    onChange(format(date, "dd/MM/yyyy"));
  };

  return (
    <div className="date-field">
      <label>{label}</label>
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        showTodayButton
        todayButton="Today"
        placeholderText="jj/mm/aaaa"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        dateFormat="dd/MM/yyyy"
      />
    </div>
  );
}

export default DateField;