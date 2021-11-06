import React, { Component } from 'react'
import axios from 'axios';

export default class Refund_Details extends Component {
    constructor(props){
        super(props);

        this.state={
            refunddetailsGet:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/refunddetailsGet/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    refunddetailsGet:res.data.refunddetailsGet
                });

                console.log(this.state.refunddetailsGet);
            }
        });
    }

    render() {

        const {referenceNo, nicno, transactionID, paymentDate, payername, payeraddress, totalfee} = this.state.refunddetailsGet;

        return (
            
         
            <div style={{marginTop: '80px', marginLeft:'400px'}}>
            
            <h3 style={{color:'#0d47a1'}}>Payement Details</h3>
            <hr style={{width:'37%'}}/>

                <dl className="row" marginTop="20px">
                    <dt className="col-sm-3">Reference No</dt>
                    <dd className="col-sm-9">{referenceNo}</dd>

                    <dt className="col-sm-3">NIC No</dt>
                    <dd className="col-sm-9">{nicno}</dd>

                    <dt className="col-sm-3">Transcation ID</dt>
                    <dd className="col-sm-9">{transactionID}</dd>

                    <dt className="col-sm-3">Payment Date</dt>
                    <dd className="col-sm-9">{paymentDate}</dd>

                    <dt className="col-sm-3">Payer Name</dt>
                    <dd className="col-sm-9">{payername}</dd>

                    <dt className="col-sm-3">Payer Address</dt>
                    <dd className="col-sm-9">{payeraddress}</dd>

                    <dt className="col-sm-3">Total Fee</dt>
                    <dd className="col-sm-9">{totalfee}</dd>
                </dl>
   
                <br/>
                <button className="btn btn-primary"><a href="/refundView" style={{textDecoration:'none',color:'white'}}>Back</a></button>

            </div>
            
        )
    }
}
