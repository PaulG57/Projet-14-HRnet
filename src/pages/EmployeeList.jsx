import DataTable from 'datatables.net-react';
import DT from 'datatables.net-bs5';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-bs5/css/dataTables.bootstrap5.css';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react-hooks/rules-of-hooks
DataTable.use(DT);

function EmployeeList() {
  const employees = useSelector((state) => state.employees);

  const data = employees.map((emp) => [
    emp.firstName,
    emp.lastName,
    emp.startDate,
    emp.department,
    emp.birthDate,
    emp.street,
    emp.city,
    emp.state,
    emp.zipCode,
  ]);

  return (
    <div>
      <h1>Current Employees</h1>
      <DataTable data={data} className="display">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Start Date</th>
            <th>Department</th>
            <th>Date of Birth</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
          </tr>
        </thead>
      </DataTable>
      <Link to="/">Home</Link>
    </div>
  );
}

export default EmployeeList;