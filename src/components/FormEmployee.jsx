import { useState } from 'react';
import NameFields from './NameFields';

function FormEmployee() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    // autres champs plus tard
  });

  function updateField (field, value) {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Formulaire envoyé :', formData);
    // TODO : stocker dans localStorage ou global state plus tard
  }

  return (
    <form onSubmit={handleSubmit}>

      <NameFields
        firstName={formData.firstName}
        lastName={formData.lastName}
        updateField={updateField}
      />

      <button type="submit">Save</button>
    </form>
  );
}

export default FormEmployee;