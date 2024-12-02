import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../api/axios'

export default function EmployeeAdd() {
  var [employee, setEmployee] = useState({})
  let navigate = useNavigate()

  const addEmployee = async () => {
    try {
      const response = await axios.post(`https://101329925-comp-3123-assignment1.vercel.app/api/v1/emp/employees/`, {
        'first_name': employee.first_name,
        'last_name': employee.last_name,
        'email': employee.email,
        'position': employee.position,
        'salary': employee.salary,
        'date_of_joining': employee.date_of_joining,
        'department': employee.department,
      })
      console.log(response)
      navigate('/employees')
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setEmployee({
      ...employee,
      [name]: value
    })
  }

  return (
    <div className='tableSection'>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Position</th>
          <th>Salary</th>
          <th>Date of Joining</th>
        </tr>
        <tr>
          <td><input type='text' name='first_name' onChange={handleChange} value={employee.first_name} /></td>
          <td><input type='text' name='last_name' onChange={handleChange} value={employee.last_name} /></td>
          <td><input type='text' name='email' onChange={handleChange} value={employee.email} /></td>
          <td><input type='text' name='department' onChange={handleChange} value={employee.department} /></td>
          <td><input type='text' name='position' onChange={handleChange} value={employee.position} /></td>
          <td><input type='number' name='salary' onChange={handleChange} value={employee.salary} /></td>
          <td><input type='date' name='date_of_joining' onChange={handleChange} value={employee.date_of_joining} /></td>
        </tr>
      </table>
      <div className='editDelete'>
        <button onClick={() => { addEmployee() }} className='editButton'>Add</button>
      </div>
    </div>
  )
}
