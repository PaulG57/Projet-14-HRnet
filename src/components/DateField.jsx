import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { parse, format } from "date-fns";
import "../styles/DateField.css";

function DateField({ label, value, onChange }) {
  const handleChange = (date) => {
    onChange(date ? format(date, "dd/MM/yyyy") : "");
  };

  return (
    <div className="date-field">
      <label>{label}</label>
      <DatePicker
        selected={value ? parse(value, "dd/MM/yyyy", new Date()) : null}
        onChange={handleChange}
        showTodayButton
        todayButton="Today"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        dateFormat="dd/MM/yyyy"
      />
    </div>
  );
}

export default DateField;