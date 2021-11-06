import React, { Component } from 'react'
import axios from 'axios';

export default class CreatePayment extends Component {

    constructor(props){
        super(props);
        this.state={
            paymentType:"",
            invoiceNo:"",
            patientName:"",
            amount:"",
            payerName:"",
            nicNo:"",
            contactNo:"",
            emailAddress:"",
            address:"",       
        };
    }

    handleChange = (e) => {
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    };

    handleSubmit = (e) =>{
        e.preventDefault();

        const {paymentType,invoiceNo,patientName,amount,payerName,nicNo,contactNo,emailAddress,address} = this.state;

        const data ={
            paymentType:paymentType,
            invoiceNo:invoiceNo,
            patientName:patientName,
            amount:amount,
            payerName:payerName,
            nicNo:nicNo,
            contactNo:contactNo,
            emailAddress:emailAddress,
            address:address
        }
        console.log(data)

        axios.post("/post/save",data).then((res) =>{
            if(res.data.success){
                // this.setState(
                //     {
                //         paymentType:"",
                //         invoiceNo:"",
                //         patientName:"",
                //         amount:"",
                //         payerName:"",
                //         nicNo:"",
                //         contactNo:"",
                //         emailAddress:"",
                //         address:""
                //     }

                    
                // )
                console.log(res.data.data._id)
                this.props.history.push('/confirm/'+res.data.data._id)
            }
        })
        
        
        
    }

    render() {

        return (
            
            <div className="col-md-8 mt-4 mx-auto row">
                <form onSubmit={this.handleSubmit} className="border border-info" style={{paddingBottom:'30px',paddingTop:'30px', marginTop:'40px'}}>
                    <h1 className="h3 mb-3 font-weight-normal" style={{color:'#0d47a1'}}>Payment Information </h1>
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom: '5px', fontWeight: 'bold', color:'#1976d2'}}>Payment Type</label>
                            <select 
                            className="form-control"
                            name="paymentType"
                            required
                            value={this.state.paymentType}
                            onChange={this.handleChange}>

                                <option selected>Payment Type</option>
                                <option>Covide Care Charges</option>
                                <option>RT-PCR Test</option>
                                <option>Rapid PCR Tests</option>
                                <option>Consultant fees Receipt</option>
                                <option>Final Bill</option>
                                <option>General Receipt</option>
                                <option>Lab Receipt</option>
                                <option>Pharmacy Bill</option>

                            </select>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom: '5px', fontWeight: 'bold', color:'#1976d2'}}>Invoice No</label>
                            <input type="text"
                            className="form-control"
                            name="invoiceNo"  
                            pattern="[0-9]{4,12}"
                            placeholder="Enter Invoice No."
                            value={this.state.invoiceNo}
                            onChange={this.handleChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom: '5px', fontWeight: 'bold', color:'#1976d2'}}>Patient Name</label>
                            <input type="text"
                            className="form-control"
                            name="patientName"
                            placeholder="Enter the Patient Name"
                            required
                            value={this.state.patientName}
                            onChange={this.handleChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom: '5px', fontWeight: 'bold', color:'#1976d2'}}>Amount</label>
                            <input type="text"
                            className="form-control"
                            name="amount"
                            placeholder="Ex:4500.00"
                            required
                            pattern="\d+(\.\d{2})?"          
                            value={this.state.amount}
                            onChange={this.handleChange}/>
                        </div>
                        <br/>
                   
                
                <h1 className="h3 mb-3 font-weight-normal" style={{color:'#0d47a1'}}>Payer Information</h1>
                    
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom: '5px', fontWeight: 'bold', color:'#1976d2'}}>Payer Name</label>
                            <input type="text"
                            className="form-control"
                            name="payerName"
                            required
                            placeholder="Enter the Payer Name"
                            value={this.state.payerName}
                            onChange={this.handleChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom: '5px', fontWeight: 'bold', color:'#1976d2'}}>NIC No</label>
                            <input type="text"
                            className="form-control"
                            name="nicNo"
                            placeholder="NIC No."
                            required
                            pattern="[0-9]{3}[0-9]{3}[0-9]{3}{1}[v/V] || [0-9]{4}[0-9]{4}[0-9]{4}"             
                            value={this.state.nicNo}
                            onChange={this.handleChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom: '5px', fontWeight: 'bold', color:'#1976d2'}}>Contac No</label>
                            <input type="text"
                            className="form-control"
                            name="contactNo"
                            placeholder="07xxxxxxxx"
                            required
                            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                            maxLength={10}
                            value={this.state.contactNo}
                            onChange={this.handleChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom: '5px', fontWeight: 'bold', color:'#1976d2'}}>Email Address</label>
                            <input type="email"
                            className="form-control"
                            name="emailAddress"
                            placeholder="example@gmail.com"
                            required
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"  
                            value={this.state.emailAddress}
                            onChange={this.handleChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom: '5px', fontWeight: 'bold', color:'#1976d2'}}>Address</label>
                            <input type="text"
                            className="form-control"
                            name="address"
                            placeholder="Enter the Address"
                            required
                            value={this.state.address}
                            onChange={this.handleChange}/>
                        </div>


                        <button className="btn btn-primary" type="submit" value="Submit" style={{marginTop:'15px',marginLeft:'8px'}}>
                            <i className="far fa-check-square"></i>
                            &nbsp; Submit
                        </button>
                       
                </form>
            </div>
                          
        );
    }
}
