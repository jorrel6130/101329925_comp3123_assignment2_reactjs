import React, { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from '../api/axios'

export default function EmployeeDetails() {
    const { field, search } = useParams()
    var [employees, setEmployees] = useState([])
    var [searchField, setSearchField] = useState('')
    var [searchValue, setSearchValue] = useState('')
    var url = ''
    let navigate = useNavigate();

    if (field && search) {
        url = `/api/v1/emp/employees/${field}/${search}`
    } else {
        url= `/api/v1/emp/employees`
    }

    const getEmployees = async () => {
        try {
            const response = await axios.get(url)
            setEmployees(response.data)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    const handleInput = (e) => {
        const { name, value } = e.target
        switch(name) {
            case 'searchIn':
              setSearchField(value)
              break;
            case 'searchFor':
              setSearchValue(value)
              break;
            default:
              return null;
        }
    }

    const handleSubmit = () => {
        navigate(`/employees/${searchField}/${searchValue}`); 
    }

    

    useEffect(() => { getEmployees() }, [])

    return (
        <div className='tableSection'>
            <form onSubmit={handleSubmit}>
                <select name='searchIn' onChange={handleInput}>
                    <option value='department'>Department</option>
                    <option value='position'>Position</option>
                </select>
                <input type='text' name='searchFor' onChange={handleInput} placeholder='enter search term' />
                <input type='submit' value='Search' />
            </form>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                {
                    employees.map(employee => (
                        <tr key={employee._id}>
                            <td>{employee._id}</td>
                            <td>
                                <a href={`/employee/${employee._id}`}>{employee.last_name}, {employee.first_name}</a>
                            </td>
                            <td>
                                <button onClick='' className='editButton'>Edit</button>
                            </td>
                            <td>
                                <button onClick='' className='deleteButton'>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}