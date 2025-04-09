import { useState } from 'react';
import NameFields from './NameFields';
import DateField from './DateField';
import AddressFields from './AddressFields';
import SelectField from './SelectField';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../features/employeesSlice';
import { Modal } from 'modal-react-pg';

function FormEmployee() {

  const dispatch = useDispatch();

  const initialFormData = {
    firstName: '',
    lastName: '',
    birthDate: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
  };  

  const [formData, setFormData] = useState(initialFormData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function updateField (field, value) {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addEmployee(formData));
    setFormData(initialFormData);
    setIsModalOpen(true);
    console.log('Formulaire envoyé :', formData);
  }

  return (
    <form onSubmit={handleSubmit}>

      <NameFields
        firstName={formData.firstName}
        lastName={formData.lastName}
        updateField={updateField}
      />

      <DateField
        label="Date of Birth"
        id="birthDate"
        value={formData.birthDate}
        onChange={(val) => updateField('birthDate', val)}
      />

      <DateField
        label="Start Date"
        id="startDate"
        value={formData.startDate}
        onChange={(val) => updateField('startDate', val)}
      />

      <AddressFields
        formData={formData}
        updateField={updateField}
      />

      <SelectField
        label="Department"
        id="department"
        value={formData.department}
        onChange={(val) => updateField('department', val)}
        options={['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal']}
      />

      <button type="submit">Save</button>

      <Modal
        isOpen={isModalOpen}
        message="Employee Created !"
        onClose={() => setIsModalOpen(false)}
      />

    </form>
    
  );
}

export default FormEmployee;