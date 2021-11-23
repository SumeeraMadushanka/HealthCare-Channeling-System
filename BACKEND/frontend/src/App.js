import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import CreatePayment from './components/pages/payment/CreatePayment';
import CreditCard from './components/pages/creditcard/CreditCard';
import EditDetails from './components/pages/payment/EditDetails';

import NavBar from './components/common/NavBar';
import ConfirmDetails from './components/pages/payment/ConfirmDetails';
import RefundRequest from './components/pages/refunddetails/RefundRequest';
import RefundSearch from './components/pages/refunddetails/RefundSearch';
import ContactUs from './components/common/ContactUs';
import AboutUs from './components/common/AboutUs';
import AllPayersDetails from './components/pages/payment/AllPayersDetails';
import RefundDetails from './components/pages/refunddetails/RefundDetails';
import Confirm from './components/pages/payment/Confirm';
import Login from './components/pages/admin/Login';
import AdminLogin from './components/pages/admin/AdminLogin';
import PatientLogin from './components/pages/admin/PatientLogin'
import ViewRefundRequest from './components/pages/admin/payment_managment/ViewRefundRequest';
import View_Refund_Details from './components/pages/admin/payment_managment/View_Refund_Details';
import AdminHome from './components/pages/admin/AdminHome';
import DoctorLogin from './components/pages/admin/DoctorLogin';
import Main from './components/common/Main';



export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
          <NavBar/>
          <Route path="/" exact component={Main}></Route>
          <Route path="/add" component={CreatePayment}></Route>
          <Route path="/edit/:id" component={EditDetails}></Route>
          <Route path="/post/:id" component={ConfirmDetails}></Route>
          <Route path="/card" component={CreditCard}></Route>
          <Route path="/refundSearch" component={RefundSearch}></Route>
          <Route path="/refund" component={RefundRequest}></Route>
          <Route path="/contactUs" component={ContactUs}></Route>
          <Route path="/aboutUs" component={AboutUs}></Route>
          <Route path="/allpayer" component={AllPayersDetails}></Route>
          <Route path="/refundDetails" component={RefundDetails}></Route>
          <Route path="/confirm/:id" component={Confirm}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/adminlogin" component={AdminLogin}></Route>
          <Route path="/patientlogin" component={PatientLogin}></Route>
          <Route path="/refundView" component={ViewRefundRequest}></Route>
          <Route path="/refund_Details" component={View_Refund_Details}></Route>
          <Route path="/adminhome" component={AdminHome}></Route>
          <Route path="/doctorlogin" component={DoctorLogin}></Route>
          <br/>
          <br/>
          
      </div>
      </BrowserRouter>
    )
  }
}
