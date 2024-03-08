import React, { useEffect, useState } from 'react'
export default function Login() {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    useEffect(()=>{
        console.log(email, password);
    })
  return (
    <div className='login'>
        <h3>Login</h3>
        <input className="inputbox" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} value={email} />
        <input className="inputbox" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} value={password} />
        <button className="appbutton"  type="button">Login</button>
    </div>
  )
}
