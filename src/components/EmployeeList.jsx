import  React,{ useContext } from 'react';
import { Table } from 'react-bootstrap';
import { EmployeeContext } from './Home';
import { Link } from 'react-router-dom';


export default function EmployeeList() {

  const { data } = useContext(EmployeeContext);
  //console.log{}
  return (
    <React.Fragment>
      {/* <Link to="/employees/create">Add Employees</Link> */}
      <Link to="/employees/create" className="btn btn-success">Add Employees</Link>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Location ID</th>
          <th>Emp. Code</th>
          <th>Name</th>
          <th>Designation</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item, index) => {
            return (<tr key={index}>
              <td>{item.LocationID}</td>
              <td>{item.Empcode}</td>
              <td>{item.Name}</td>
              <td>{item.Designation}</td>
              <td>{item.Department}</td>
              <td>
                <Link to={`/employees/loc/${item.LocationID}/ecode/${item.Empcode}`}>Details</Link>
              </td>
            </tr>)
          })
        }
      </tbody>
    </Table>
    </React.Fragment>
  )
}




