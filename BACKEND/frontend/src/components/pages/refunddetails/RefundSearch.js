import React, { Component } from 'react'



export default class RefundSearch extends Component {

    constructor(props){
        super(props);
        this.state={
            referenceNo:"",
            nicno:"",
         
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleChange = (e) => {
        console.log(e);
        this.setState({ referenceNo: e.target.value });
        console.log(this.state.referenceNo);    
    }

    handleFormSubmit = () => {
        const {referenceNo, nicno } = this.state;
        localStorage.setItem('referenceNo', referenceNo);
        localStorage.setItem('nicno', nicno);
    };


    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto row">
                <h1 className="h3 mb-3 font-weight-normal " style={{color:'#0d47a1'}}></h1>
                    <form className="needs-validation w-75 border border-info" noValidate style={{paddingBottom:'30px',paddingTop:'30px', marginTop:'90px'}}>
                       

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom: '5px', fontWeight: 'bold', color:'#1976d2'}}>Reference No.</label>
                            <input type="text"
                            className="form-control"
                            value={this.state.referenceNo.value}
                            onChange={this.changeHandler}
                            name="referenceNo"
                            required
                            placeholder="Enter Reference No."
                            onChange={this.handleChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom: '5px', fontWeight: 'bold', color:'#1976d2'}}>NIC No.</label>
                            <input type="text"
                            className="form-control"
                            value={this.state.nicno.value}
                            onChange={this.changeHandler}
                            name="nicno"
                            required
                            placeholder="Enter NIC No."
                            onChange={(e)=>this.setState({nicno:e.target.value},console.log(this.state.nicno))}/>
                        </div>

                        <a href={"/refundDetails"} style={{textDecoration:'none',color:'white'}}><button onClick={this.handleFormSubmit} className="btn btn-primary " style={{marginTop:'10px', marginLeft:'8px'}}>Search</button></a>
                        {/* <RefundDetails RefundDetails={this.state} /> */}
                        <br/>
                     
                    </form>
                          
            </div>
        )
    }
}
