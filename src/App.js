import './App.css'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import React, { Component } from 'react'
import Navbar from './components/navbar'
import EmployeeList from './screens/employeeList'
import Employee from './screens/employeeDetails'
import EmployeeEdit from './screens/employeeEdit'
import EmployeeAdd from './screens/employeeAdd'
import Login from './screens/login'
import Signup from './screens/signup'

export default class App extends Component {

  tokenCheck = (Component) => {
    console.log('HUH???')
    return localStorage.getItem('token') ? (
      <Component />
    ) : (
      <Navigate to="/login" replace />
    );
  };

  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/login' element= { <Login /> }/>
            <Route path='/signup' element= { <Signup /> }/>
            <Route path='/employees' element={this.tokenCheck(EmployeeList)}/>
            <Route path='/employee/:id' element= { this.tokenCheck(Employee) }/>
            <Route path='/employees/add' element= { this.tokenCheck(EmployeeAdd) }/>
            <Route path='/employee/edit/:id' element= { this.tokenCheck(EmployeeEdit) }/>
            <Route path='/employees/:field/:search' element= { this.tokenCheck(EmployeeList) } />
            <Route path="*" element={<Navigate to="/employees" replace />} />
          </Routes>
        </BrowserRouter>
      </div>
    )}
}
