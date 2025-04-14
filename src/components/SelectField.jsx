import Select from "react-select";

function SelectField({ label, value, onChange, options }) {
  return (
    <div className="select-field">
      <label>{label}</label>
      <Select
        value={options.find((opt) => opt.value === value)}
        onChange={(selected) => onChange(selected.value)}
        options={options}
      />
    </div>
  );
}

export default SelectField;