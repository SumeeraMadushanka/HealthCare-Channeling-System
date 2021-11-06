import React, { Component } from 'react'
import axios from 'axios'
import swal from 'sweetalert';

export default class EditDetails extends Component {

    constructor(props){
        super(props);
        this.state={
            payerName:"",
            nicNo:"",
            contactNo:"",
            emailAddress:"",
            address:"",
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

        const id = this.props.match.params.id;

        const {payerName,nicNo,contactNo,emailAddress,address} = this.state;

        const data ={
            payerName:payerName,
            nicNo:nicNo,
            contactNo:contactNo,
            emailAddress:emailAddress,
            address:address
        }

        console.log(data)

        axios.put(`/posts/update/${id}`,data).then((res) =>{
            if(res.data.success){
                
                this.setState(
                    {
                        payerName:"",
                        nicNo:"",
                        contactNo:"",
                        emailAddress:"",
                        address:"" 
                    }
                )

                swal({
                    title: "Success!",
                    text: "Updated Successfuly",
                    icon: "success",
                    button: "OK!",
                })
            }
        })

        this.props.history.push('/allpayer')
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
        let {payerName,nicNo,contactNo,emailAddress,address} = this.state;
        let errors = {};
        errors.payerName = this.validatepayerName(payerName);
        errors.nicNo = this.validatenicNo(nicNo);
        errors.contactNo = this.validatecontactNo(contactNo);
        errors.emailAddress = this.validatemailAddress(emailAddress);
        errors.address = this.validateaddress(address);

        return errors;
    }

    validatepayerName = (payerName) =>
        !payerName
        ?"You must enter name"
        :"";

    validatenicNo = (nicNo) =>
        !nicNo
        ?"You must enter nic no"
        :"";

    validatecontactNo = (contactNo) =>
        !contactNo
        ?"You must enter contact no"
        :"";

    validatemailAddress = (emailAddress) =>
        !emailAddress
        ?"You must enter email address"
        :"";

    validateaddress = (address) =>
        !address
        ?"You must enter address"
        :"";

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/post/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    payerName:res.data.post.payerName,
                    nicNo:res.data.post.nicNo,
                    contactNo:res.data.post.contactNo,
                    emailAddress:res.data.post.emailAddress,
                    address:res.data.post.address

                });

                console.log(this.state.post);
            }
        });
    }

    render() {

        let {errors} = this.state;

        return (
            <div className="col-md-8 mt-4 mx-auto">
                <center><h1 className="h3 mb-3 font-weight-normal">Edit Details</h1></center>
                    <form className="needs-validation" noValidate>
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom: '5px'}}>Payer Name</label>
                            <input type="text"
                            className="form-control"
                            name="payerName"
                            placeholder="Enter Payer Name"
                            value={this.state.payerName}
                            onChange={this.handleInputChange}/>
                            {errors.payerName ? (<span className="text-danger">{errors.payerName}</span>
                            ) : (
                            "")}
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom: '5px'}}>NIC No</label>
                            <input type="text"
                            className="form-control"
                            name="nicNo"
                            placeholder="Enter NIC No"
                            value={this.state.nicNo}
                            onChange={this.handleInputChange}/>
                            {errors.nicNo ? (<span className="text-danger">{errors.nicNo}</span>
                            ) : (
                            "")}
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom: '5px'}}>Contac No</label>
                            <input type="text"
                            className="form-control"
                            name="contactNo"
                            placeholder="Enter Contact No"
                            value={this.state.contactNo}
                            onChange={this.handleInputChange}/>
                            {errors.contactNo ? (<span className="text-danger">{errors.contactNo}</span>
                            ) : (
                            "")}
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom: '5px'}}>Email Address</label>
                            <input type="text"
                            className="form-control"
                            name="emailAddress"
                            placeholder="Enter Email Address"
                            value={this.state.emailAddress}
                            onChange={this.handleInputChange}/>
                            {errors.emailAddress ? (<span className="text-danger">{errors.emailAddress}</span>
                            ) : (
                            "")}
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom: '5px'}}>Address</label>
                            <input type="text"
                            className="form-control"
                            name="address"
                            placeholder="Enter Address"
                            value={this.state.address}
                            onChange={this.handleInputChange}/>
                            {errors.address ? (<span className="text-danger">{errors.address}</span>
                            ) : (
                            "")}
                        </div>
                        
                        <button className="btn btn-success" type="submit" style={{marginTop:'15px',marginLeft:'8px'}} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp; Update
                        </button>
                        
                           
                    </form>
                    <br/>

            </div>
        )
    }
}
