import SelectField from './SelectField';
import states from '../data/states';

const stateOptions = states.map((state) => ({
  value: state.abbreviation,
  label: state.name,
}));

function AddressFields({ formData, updateField }) {
  return (
    <div className="address-fields form">
      <h4>Address</h4>
      <div>
        <label htmlFor="street">Street</label>
        <input
          id="street"
          type="text"
          value={formData.street}
          onChange={(e) => updateField('street', e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          value={formData.city}
          onChange={(e) => updateField('city', e.target.value)}
        />
      </div>

      <SelectField
        label="State"
        id="state"
        value={formData.state}
        onChange={(val) => updateField('state', val)}
        options={stateOptions}
      />

      <div>
        <label htmlFor="zipCode">Zip Code</label>
        <input
          id="zipCode"
          type="number"
          min="0"
          value={formData.zipCode}
          onChange={(e) => updateField('zipCode', e.target.value)}
        />
      </div>
    </div>
  );
}

export default AddressFields;