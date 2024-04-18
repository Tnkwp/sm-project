import '../CustomerCss/Customer.css'
import { Link } from 'react-router-dom'


const Customer = () => {
  return (
    <div className=''>
         
        <header className="customer-header">
          <h2>Customers</h2>
          <Link to="/AddNewCustomer" ><button className='add-button'>Add new customer</button></Link>
        </header>
      
    
    </div>
  )
}

export default Customer
