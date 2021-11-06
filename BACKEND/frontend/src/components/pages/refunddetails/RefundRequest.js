import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert'

export default class RefundRequest extends Component {

    constructor(props){
        super(props);
        this.state={
            appoinmentRefNumber:"",
            refundReason:"",
            accountHolderName:"",
            bankName:"",
            branch:"",
            bankAccountNumber:"",
            errors: ""
        }
    }


    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }



    onSubmit = (e) =>{
        e.preventDefault();
        let errors = this.validateAll();
        if (this.isValid(errors)){

        const {appoinmentRefNumber,refundReason,accountHolderName,bankName,branch,bankAccountNumber} = this.state;

        const data ={
            appoinmentRefNumber:appoinmentRefNumber,
            refundReason:refundReason,
            accountHolderName:accountHolderName,
            bankName:bankName,
            branch:branch,
            bankAccountNumber:bankAccountNumber
        }
        console.log(data)

        axios.post("/refundPost/save",data).then((res) =>{
            if(res.data.success){
                this.setState(
                    {
                        appoinmentRefNumber:"",
                        refundReason:"",
                        accountHolderName:"",
                        bankName:"",
                        branch:"",
                        bankAccountNumber:""
                    }
                )

                swal({
                    title: "Success!",
                    text: "Refund Request Successfuly",
                    icon: "success",
                    button: "OK!",
                })
            }
        })
    }

    else {
        let s1 = {...this.state};
        s1.errors = errors;
        this.setState(s1);
    }
    };

    isValid = (errors) => {
        //errors would have keys with non empty string as values
        let keys = Object.keys(errors); //keys in an array
        let count = keys.reduce((acc,curr) => errors[curr] ? acc+1 : acc,0);
        return count === 0;
    }

    validateAll = (e) => {
        let {appoinmentRefNumber,refundReason,accountHolderName,bankName,bankAccountNumber,branch} = this.state;
        let errors = {};
        errors.appoinmentRefNumber = this.validateappoinmentRefNumber(appoinmentRefNumber);
        errors.refundReason = this.validaterefundReason(refundReason);
        errors.accountHolderName = this.validateaccountHolderName(accountHolderName);
        errors.bankName = this.validatebankName(bankName);
        errors.bankAccountNumber = this.validatebankAccountNumber(bankAccountNumber);
        errors.branch = this.validatebranch(branch);

        return errors;
    }

    validateappoinmentRefNumber = (appoinmentRefNumber) =>
    !appoinmentRefNumber
    ?"You must enter appoinment Refnumber"
    :"";

    validaterefundReason = (refundReason) =>
    !refundReason
    ?"You must enter reason"
    :"";

    validateaccountHolderName = (accountHolderName) =>
    !accountHolderName
    ?"You must enter account holder name"
    :"";

    validatebankName = (bankName) =>
    !bankName
    ?"You must enter bank name"
    :"";
    
    validatebranch = (branch) =>
    !branch
    ?"You must enter branch"
    :"";

    validatebankAccountNumber = (bankAccountNumber) =>
    !bankAccountNumber
    ?"You must enter bank account number"
    :"";

    render() {

        let {errors} = this.state;

        return (
            
            <div className="col-md-6 mt-4 mx-auto">
                <br/>
                    <form className="needs-validation border border-info" noValidate style={{paddingBottom:'30px',paddingTop:'30px',paddingLeft:"25px",paddingRight:"25px", marginTop:'40px'}}>
                    <h2 className="h3 mb-3 font-weight-normal mb-4" style={{color:'#0d47a1', textAlign:'center'}}>Claim Refund</h2>
                        <div className="form-group mb-4" style={{marginBottom:'15px'}}>
                            <label className="mb-2" style={{marginBottom: '5px', fontWeight: 'bold', color:'#1976d2'}}>Appoinment Ref.Number</label>
                            <input type="text"
                            className="form-control"
                            name="appoinmentRefNumber"
                            placeholder="Reference Number"
                            value={this.state.appoinmentRefNumber}
                            onChange={this.handleInputChange}/>
                            {errors.appoinmentRefNumber ? (<span className="text-danger">{errors.appoinmentRefNumber}</span>
                            ) : (
                            "")}
                        </div>

                        <div className="form-group mb-4" style={{marginBottom:'15px'}}>
                            <label className="mb-2" style={{marginBottom: '5px', fontWeight: 'bold', color:'#1976d2'}}>Refund Reason</label>
                            <textarea  type="text"
                            className="form-control"
                            row="7"
                            name="refundReason"
                            placeholder="Refund Reason"
                            value={this.state.refundReason}
                            onChange={this.handleInputChange}/>
                            {errors.refundReason ? (<span className="text-danger">{errors.refundReason}</span>
                            ) : (
                            "")}
                        </div>

                        <div className="form-group mb-4" style={{marginBottom:'15px'}}>
                            <label className="mb-2" style={{marginBottom: '5px', fontWeight: 'bold', color:'#1976d2'}}>Account Holder Name</label>
                            <input type="text"
                            className="form-control"
                            name="accountHolderName"
                            placeholder="Account Holder Name"
                            value={this.state.accountHolderName}
                            onChange={this.handleInputChange}/>
                            {errors.accountHolderName ? (<span className="text-danger">{errors.accountHolderName}</span>
                            ) : (
                            "")}
                        </div>

                        <div className="form-group mb-4" style={{marginBottom:'15px'}}>
                            <label className="mb-2" style={{marginBottom: '5px', fontWeight: 'bold', color:'#1976d2'}}>Bank Name</label>
                            <input type="text"
                            className="form-control"
                            name="bankName"
                            placeholder="Bank Name"
                            value={this.state.bankName}
                            onChange={this.handleInputChange}/>
                            {errors.bankName ? (<span className="text-danger">{errors.bankName}</span>
                            ) : (
                            "")}
                        </div>

                        <div className="form-group mb-4" style={{marginBottom:'15px'}}>
                            <label className="mb-2" style={{marginBottom: '5px', fontWeight: 'bold', color:'#1976d2'}}>Branch</label>
                            <input type="text"
                            className="form-control"
                            name="branch"
                            placeholder="Branch"
                            value={this.state.branch}
                            onChange={this.handleInputChange}/>
                            {errors.branch ? (<span className="text-danger">{errors.branch}</span>
                            ) : (
                            "")}
                        </div>

                        <div className="form-group mb-4" style={{marginBottom:'15px'}}>
                            <label className="mb-2" style={{marginBottom: '5px', fontWeight: 'bold', color:'#1976d2'}}>Bank Acccount Number</label>
                            <input type="text"
                            className="form-control"
                            name="bankAccountNumber"
                            placeholder="Bank Account Number"
                            value={this.state.bankAccountNumber}
                            onChange={this.handleInputChange}/>
                            {errors.bankAccountNumber ? (<span className="text-danger">{errors.bankAccountNumber}</span>
                            ) : (
                            "")}
                        </div>

                        <button className="btn btn-primary" type="submit" style={{marginTop:'15px', marginLeft:'8px'}} onClick={this.onSubmit}>
                            Send
                        </button>
                    </form>
                
            </div>
            
        );
    }
}
