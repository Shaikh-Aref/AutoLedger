import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Admin } from './components/ui/Home'
import { ABOUT_US, BASE_ROUTE, CONTACT_US, CUSTOMER_EDIT_ROUTE, CUSTOMER_LIST_ROUTE, Log_In, REGISTRATION_ROUTE, Sign_Up } from './constants/AppRoute';
import { CustomerRegistrationForm } from './components/ui/CustomerRegistrationForm';
import { CustomerList } from './components/ui/CustomerList';
import { CustomerEditForm } from './components/ui/CustomerEditForm';
import { ContactUs } from './components/ui/Contact_Us';
import { LoginForm } from './components/ui/Admin/admin_login';
import { RegisterForm } from './components/ui/Admin/admin_register';
import About from './components/ui/About';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path={BASE_ROUTE} element={<Admin />} />
          <Route path={REGISTRATION_ROUTE} element={<CustomerRegistrationForm/>} />
          <Route path={CUSTOMER_LIST_ROUTE} element={<CustomerList/>} />
          <Route path={CUSTOMER_EDIT_ROUTE} element={<CustomerEditForm/>}/>
          <Route path={ABOUT_US} element={<About/>}/>
          <Route path={CONTACT_US} element={<ContactUs/>}/>
          <Route path={Log_In} element={<LoginForm/>}/>
          <Route path={Sign_Up} element={<RegisterForm/>}/>
        </Routes>

     

    </BrowserRouter>
  );
}

export default App;
