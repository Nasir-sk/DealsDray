import React from 'react'
// import App from '../App.css'
import {Link, useNavigate} from 'react-router-dom'
export default function Header() {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/login')
    }
  return (
    <div>
        <ul className="nav-ul">
        <img
            alt='logo'
            className='logo'
            src='https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png'/>

            <li><Link to="/">Home</Link></li>
            <li><Link to="/emp-list">Employee List</Link></li>
            <li><Link to="/dashboard">Nasir</Link></li>
            <li><Link to='/login' onClick={logout}>Logout</Link></li>
            </ul>
    </div>
  )
}
