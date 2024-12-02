import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from '../api/axios'

export default function EmployeeEdit() {
    const { id } = useParams()
    var [employee, setEmployee] = useState({})
    let navigate = useNavigate()

    const getEmployees = async () => {
        const employeeUrl = `/api/v1/emp/employees/${id}`
        try {
            const response = await axios.get(employeeUrl)
            setEmployee(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const updateEmployee = async () => {
        try {
            const response = await axios.put(`https://101329925-comp-3123-assignment1.vercel.app/api/v1/emp/employees/${employee._id}`, {
                'first_name': employee.first_name,
                'last_name': employee.last_name,
                'email': employee.email,
                'department': employee.department,
                'position': employee.position,
                'salary': employee.salary
            })
            setEmployee(response.data)
        } catch (error) {
            console.log(error)
        }
        getEmployees()
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setEmployee({
            ...employee,
            [name]: value
        })
    }

    useEffect(() => { getEmployees() }, [])

    return (
        <div className='tableSection'>
            <form onSubmit={updateEmployee}>
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Position</th>
                        <th>Salary</th>
                    </tr>
                    <tr>
                        <td><input type='text' name='first_name' onChange={handleChange} value={employee.first_name || ''} /></td>
                        <td><input type='text' name='last_name' onChange={handleChange} value={employee.last_name || ''} /></td>
                        <td><input type='text' name='email' onChange={handleChange} value={employee.email || ''} /></td>
                        <td><input type='text' name='department' onChange={handleChange} value={employee.department || ''} /></td>
                        <td><input type='text' name='position' onChange={handleChange} value={employee.position || ''} /></td>
                        <td><input type='number' name='salary' onChange={handleChange} value={employee.salary || ''} /></td>
                    </tr>
                </table>
                <div className='editDelete'>
                    <button onClick='' className='editButton'>Save</button>
                </div>
            </form>
        </div>
    )
}
