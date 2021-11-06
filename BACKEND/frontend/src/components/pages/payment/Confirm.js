import React, { Component } from 'react'
import axios from 'axios';

export default class ConfirmDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;
        console.log(id);

        axios.get(`/post/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });

                console.log(this.state.post);
            }
        });
    }

    render() {

        const {paymentType,invoiceNo,patientName,amount,payerName,nicNo,contactNo,emailAddress,address} = this.state.post;

        return (
            
         
            <div style={{marginTop: '80px', marginLeft:'400px'}}>
            
            <h3 style={{color:'#0d47a1'}}>Payment Information</h3>
            <hr style={{width:'40%'}}/>

                <dl className="row" marginTop="20px">
                    <dt className="col-sm-3">Payment Type</dt>
                    <dd className="col-sm-9">{paymentType}</dd>

                    <dt className="col-sm-3">Invoice No</dt>
                    <dd className="col-sm-9">{invoiceNo}</dd>

                    <dt className="col-sm-3">Patient Name</dt>
                    <dd className="col-sm-9">{patientName}</dd>

                    <dt className="col-sm-3">Amount</dt>
                    <dd className="col-sm-9">{amount}</dd>
                </dl>
            <br/>
            <h3 style={{color:'#0d47a1'}}>Payer Information</h3>
            <hr style={{width:'40%'}}/>

                <dl className="row" marginTop="20px">
                    <dt className="col-sm-3">Payer Name</dt>
                    <dd className="col-sm-9">{payerName}</dd>

                    <dt className="col-sm-3">NIC No</dt>
                    <dd className="col-sm-9">{nicNo}</dd>

                    <dt className="col-sm-3">Cotact No</dt>
                    <dd className="col-sm-9">{contactNo}</dd>

                    <dt className="col-sm-3">Email Address</dt>
                    <dd className="col-sm-9">{emailAddress}</dd>

                    <dt className="col-sm-3">Address</dt>
                    <dd className="col-sm-9">{address}</dd>
                </dl>

   
                <br/>
                
                <div class="d-grid gap-1 d-md-flex ">
                    <button className="btn btn-warning " style={{marginRight:'420px'}}><a href="/allpayer" style={{textDecoration:'none',color:'white'}}>Edit details</a></button>
                    <button className="btn btn-primary"><a href="/card" style={{textDecoration:'none',color:'white'}}>Confirm</a></button>
                </div>

            </div>
            
        )
    }
}
