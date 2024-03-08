import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function EmployeeList() {
  const [emp, setEmp] = useState([]);

  useEffect(()=>{
    getEmp();
}, [])

  const getEmp = async()=>{
    let result = await fetch('http://localhost:4500/emp-list',{
    
})
    result = await result.json();
    setEmp(result)
}
  return (
    <div>
      <div className='create-emp'>
      <li><Link to="/create-emp">Create Employee</Link></li> 
      </div>
      <div className='emp-list'>
            <h3>Employee List</h3>
            <ul>
                <li>S. NO</li>
                <li>Name</li>
                <li>Email</li>
                <li>Mobile no</li>
                <li>Designation</li>
                <li>Gender</li>
                <li>Course</li>
                <li>Img</li>
            </ul>
            {
                emp.length>0 ? emp.map((item,index)=>
                <ul key = {item._id}>
                    <li>{index+1}</li>
                    <li>{item.name}</li>
                    <li>${item.email}</li>
                    <li>{item.mobileno}</li>
                    <li>{item.designation}</li>
                    <li>{item.gender}</li>
                    <li>{item.course}</li>
                    <li>{item.img}</li>
                </ul> 
                )
                :<h1>No Result Found</h1>
            }
      </div>
    </div>
  )
}
