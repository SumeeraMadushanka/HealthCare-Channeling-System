import React, { Component } from 'react'
import axios from 'axios';

export default class RefundDetails extends Component {

    constructor(props){
        super(props);

        this.state={
            transactionID:"",
            paymentDate:"",
            payername:"",
            payeradress:"",
            totalfee:"",
            referenceNo:"",
            nicno:""
        };
    }

    componentDidMount() {
        const referenceNo = localStorage.getItem('referenceNo') ;
        const nicno = localStorage.getItem('nicno') ;
        /*  this.setState({ specialization,date });  */
        /* console.log(user,rememberMe); */
        this.retrieveRefundDetails(referenceNo,nicno);
    }

    retrieveRefundDetails(ref,nic) {
        axios.get("refund/?ref="+ref+`&nic=`+nic).then(res => {
          if (res.data.success) {

            this.setState({
                transactionID:res.data,
                paymentDate:res.data,
                payername:res.data,
                payeradress:res.data,
                totalfee:res.data
            });

            console.log(this.state.transactionID);
          }

        });
    }

    render() {

        const {transactionID,paymentDate,payername,payeradress,totalfee} = this.state;

        return (
            <div style={{marginTop: '80px', marginLeft:'400px'}}>
            
            <h3 style={{color:'#0d47a1'}}>Refund Details</h3>
            <hr style={{width:'37%'}}/>

                <dl className="row" marginTop="20px">
                    <dt className="col-sm-3">Transaction ID</dt>
                    <dd className="col-sm-9">{transactionID}</dd>

                    <dt className="col-sm-3">Payment Date</dt>
                    <dd className="col-sm-9">{paymentDate}</dd>

                    <dt className="col-sm-3">Payer Name</dt>
                    <dd className="col-sm-9">{payername}</dd>

                    <dt className="col-sm-3">Payer Address</dt>
                    <dd className="col-sm-9">{payeradress}</dd>

                    <dt className="col-sm-3">Total Fee</dt>
                    <dd className="col-sm-9">{totalfee}</dd>
                </dl>
                <br/>
                <button className="btn btn-primary"><a href="/refundSearch" style={{textDecoration:'none',color:'white'}}>Back</a></button>

            </div>
        )
    }
}
