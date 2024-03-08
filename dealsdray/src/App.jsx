import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CreateEmp from './pages/CreateEmp';
import EditEmp from './pages/EditEmp';
import EmployeeList from './pages/EmployeeList';
import Login from './pages/Login';
import Header from './components/Header';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/emp-list' element={<EmployeeList/>} />
      <Route path='/create-emp' element={<CreateEmp/>} />
      <Route path='/edit-emp' element={<EditEmp/>} />
      <Route path='/logout' element={<h1> Logout Component</h1>} />  
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>} />
      
    </Routes>
    </BrowserRouter>

    
  )
}

export default App
