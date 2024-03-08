import React, { useState } from 'react'

export default function CreateEmp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileno, setMobileno] = useState();
  const [designation, setDesignation] = useState('')
  const [gender, setGender] = useState('')
  const [course, setCourse] = useState('')
  const [img, setImg] = useState('');
  const [error, setError] = useState(false);

  const addEmp = async () => {
  console.warn(!name);
  if (!name || !email || !mobileno || !designation || !gender || !course || !img) {
      setError(true)
      return false;
  }
    const userId = JSON.parse(localStorage.getItem('user'))._id;
    let result = await fetch('http://localhost:4500/create-emp', {
        method: 'post',
        body: JSON.stringify({ name, email, mobileno, designation, gender, course, img }),
        headers: {'Content-Type': 'application/json'}
    });
    result = await result.json();
    console.warn(result)
}

  return (
    <div className='product'>
            <h3>Add Employee</h3>
            <input type='text' placeholder='Enter employee name' className='inputbox' value={name} onChange={(e) => { setName(e.target.value) }} />
            {error && !name && <span className='invalid-input'>Enter valid name</span>}
            <input type='text' placeholder='Enter email' className='inputbox' value={email} onChange={(e) => { setEmail(e.target.value) }} />
            {error && !email && <span className='invalid-input'>Enter valid email</span>}
            <input type='text' placeholder='Enter Mobile no.' className='inputbox' value={mobileno} onChange={(e) => { setMobileno(e.target.value) }} />
            {error && !mobileno && <span className='invalid-input'>Enter valid Mobile no</span>}
            <input type='text' placeholder='Enter designation' className='inputbox' value={designation} onChange={(e) => { setDesignation(e.target.value) }} />
            {error && !designation && <span className='invalid-input'>Enter Designation</span>}
            <input type='text' placeholder='Enter gender' className='inputbox' value={gender} onChange={(e) => { setGender(e.target.value) }} />
            {error && !gender && <span className='invalid-input'>Enter valid gender</span>}
            <input type='text' placeholder='Enter course' className='inputbox' value={course} onChange={(e) => { setCourse(e.target.value) }} />
            {error && !course && <span className='invalid-input'>Enter valid course</span>}
            <input type='text' placeholder='Enter img' className='inputbox' value={img} onChange={(e) => { setImg(e.target.value) }} />
            {error && !img && <span className='invalid-input'>Enter valid img</span>}
            <button onClick={addEmp} className='appbutton'>Add Product</button>
        </div>
  )
}
