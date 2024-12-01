import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../api/axios'

export default function EmployeeDetails() {
    const { id } = useParams()
    var [employee, setEmployee] = useState([])

    const getEmployees = async() => {
        const employeeUrl = `/api/v1/emp/employees/${id}`
        try {
            const response = await axios.get(employeeUrl)
            setEmployee(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { getEmployees() }, [])

  return (
    <div className='tableSection'>
        <div className='editDelete'>
            <button onClick='' className='editButton'>Edit</button>
            <button onClick='' className='deleteButton'>Delete</button>
        </div>
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Dept</th>
                <th>Position</th>
                <th>Date of Joining</th>
            </tr>
            <tr>
                <td>{employee.first_name} {employee.last_name}</td>
                <td>{employee.email}</td>
                <td>{employee.department}</td>
                <td>{employee.position}</td>
                <td>{employee.date_of_joining}</td>
            </tr>
        </table>
    </div>
  )
}
