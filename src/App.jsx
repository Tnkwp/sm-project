import './App.css'
import { Route, Routes } from 'react-router-dom'
import Customer from './pages/Customers/Customer'
import AddNewCustomer from './pages/Customers/AddNewCustomer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import DetailandEdit from './pages/Customers/DetailandEdit'
import CustomerEdit from './pages/Customers/CustomerEdit'
import LoginForm from './pages/loginPages/Login'
import Register from './pages/loginPages/Register'

function App() {
  

  return (
    <div >
      <DetailandEdit />
    </div>
  )
}

export default App
