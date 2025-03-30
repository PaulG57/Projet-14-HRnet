function DateField({ label, value, onChange, id }) {
    return (
      <div className="date-field">
        <label htmlFor={id}>{label}</label>
        <input
          type="date"
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  }
  
  export default DateField;  