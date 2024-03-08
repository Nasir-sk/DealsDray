import React,{useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
export default function EditEmp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileno, setMobileno] = useState();
  const [designation, setDesignation] = useState('')
  const [gender, setGender] = useState('')
  const [course, setCourse] = useState('')
  const [img, setImg] = useState('');
  const [error, setError] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
        
    getEmpDetails();
},[])

  const getEmpDetails = async()=>{
    console.warn(params)
    let result = await fetch(`http://localhost:4500/edit-emp/${params.id}`,{
    });
    result = await result.json();
    setName(result.name)
    setEmail(result.email)
    setMobileno(result.mobileno)
    setDesignation(result.designation)
    setGender(result.gender)
    setCourse(result.course)
    setImg(result.img)
    setError(result.error)
}

const updateEmp= async ()=>{
  console.warn(name,email, mobileno, designation, gender, course, img ) 
  let result = await fetch(`http://localhost:4500/edit-emp/${params.id}`,{
   method:"Put",
   body:JSON.stringify({name, email, mobileno, designation, gender, course, img}),
   headers:{'Content-Type':"application/json"}
});
result = await result.json()
console.warn(result);
navigate('/emp-list');
} 
  return (
    <div className='product'>
    <h3>Edit Employee</h3>
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
    <button  onClick={updateEmp} className='appbutton'>Add Product</button>
    </div>
  )
}
