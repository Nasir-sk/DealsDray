import React, { useState, } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const navigate = useNavigate();
    // useEffect=(()=>{
    //     const auth = localStorage.getItem('user');
    //     if(auth){
    //         navigate('/dashboard')
    //     }
    // })

    const handleSignup = async()=>{
        console.warn(name, email, password);
        let result = await fetch('http://localhost:4500/signup',{
            method:"POST",
            body:JSON.stringify({name, email, password}),
            headers:{'Content-Type':'application/json'}
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem('user',JSON.stringify(result));
        navigate('/dashboard')
    }

  return (
    <div className='login'>
        <h3>Login</h3>
        <input className="inputbox" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} value={name} />
        <input className="inputbox" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} value={email} />
        <input className="inputbox" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} value={password} />
        <button className="appbutton" onClick={handleSignup} type="button">Signup</button>
    </div>
  )
}
