import './App.css'
import { Routes, Route, BrowserRouter, NavLink, Link, Navigate } from 'react-router-dom'
import React, { Component, StyleSheet } from 'react'
import Navbar from './components/navbar'
import EmployeeList from './screens/employeeList'
import Employee from './screens/employeeDetails'
import EmployeeEdit from './screens/employeeEdit'
import EmployeeAdd from './screens/employeeAdd'
import Login from './screens/login'

export default class App extends Component {

  /*tokenCheck = (Component) => {
    return localStorage.getItem("token") ? (
      <Component />
    ) : (
      <Navigate to="/login" replace />
    );
  };*/

  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/login' element= { <Login /> }/>
            <Route path='/employees' element= { <EmployeeList /> }/>
            {/*<Route path='/employees' element={this.tokenCheck(EmployeeList)}/>*/}
            <Route path='/employee/:id' element= { <Employee /> }/>
            <Route path='/employees/add' element= { <EmployeeAdd /> }/>
            <Route path='/employee/edit/:id' element= { <EmployeeEdit /> }/>
            <Route path='/employees/:field/:search' element= { <EmployeeList /> } />
            <Route path="*" element={<Navigate to="/employees" replace />} />
          </Routes>
        </BrowserRouter>
      </div>
    )}
}
