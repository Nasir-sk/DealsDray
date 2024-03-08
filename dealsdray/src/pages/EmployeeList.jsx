import React from 'react'
import { Link } from 'react-router-dom'

export default function EmployeeList() {
  return (
    <div className='create-emp'>
      <li><Link to="/create-emp">Create Employee</Link></li> 
    </div>
  )
}
