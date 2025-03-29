import { Link } from 'react-router-dom';
import FormEmployee from '../components/FormEmployee';

function CreateEmployee() {
  return (
    <main>
      <h1>HRnet</h1>
      <Link to="/employees">View Current Employees</Link>
      <h2>Create Employee</h2>
      <FormEmployee />
    </main>
  );
}

export default CreateEmployee;