import './App.css'
import { Routes, Route, BrowserRouter, NavLink, Link, Navigate } from 'react-router-dom'
import React, { Component, StyleSheet } from 'react'
import Navbar from './components/navbar'
import Home from './screens/home'
import EmployeeList from './screens/employeeList'
import Employee from './screens/employeeDetails'
import EmployeeEdit from './screens/employeeEdit'

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/home' element= { <Home /> }/>
            <Route path='/employees' element= { <EmployeeList /> }/>
            <Route path='/employee/:id' element= { <Employee /> }/>
            <Route path='/employee/edit/:id' element= { <EmployeeEdit /> }/>
            <Route path='/employees/:field/:search' element= { <EmployeeList /> } />
            <Route path="*" element={<Navigate to="/Home" replace />} />
          </Routes>
        </BrowserRouter>
      </div>
    )}
}
