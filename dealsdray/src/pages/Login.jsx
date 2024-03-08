import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const navigate = useNavigate();
    // useEffect=(()=>{
    //     const auth = localStorage.getItem('user');
    //     if(auth){
    //         navigate('/dashboard')
    //     }
    // })

    const handleLogin= async()=>{
        console.warn(email, password);
        let result = await fetch('http://localhost:4500/login',{
            method:"POST",
            body:JSON.stringify({email, password}),
            headers:{'Content-Type':'application/json'}
        });
        result = await result.json();
        console.warn(result);
        if(result)
        {
            localStorage.setItem('user',JSON.stringify(result.user));
            navigate('/dashboard')
        }else{
            alert("please enter correct details")
        }

    }

  return (
    <div className='login'>
        <h3>Login</h3>
        <input className="inputbox" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} value={email} />
        <input className="inputbox" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} value={password} />
        <button className="appbutton" onClick={handleLogin} type="button">Login</button>
    </div>
  )
}
