function NameFields({ firstName, lastName, updateField }) {
    return (
      <div className="name-fields">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => updateField('firstName', e.target.value)}
          />
        </div>
  
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => updateField('lastName', e.target.value)}
          />
        </div>
      </div>
    );
  }
  
  export default NameFields;  