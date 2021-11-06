import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default class ViewRefundRequest extends Component {

    genPDF = () => {
      const doc = new jsPDF()
      doc.setFontSize(20);
      doc.text("Refund Request Details", 70,10)
    
      doc.autoTable({
        html: '#content'
      })

      doc.setFontSize(12);
      doc.text("HealthCare Channeling -",52,272);
      doc.setFontSize(10);
      doc.text("Refund Request Details Report",100,272);
      doc.save("Refund Request Details.pdf");
    }

    constructor(props){
        super(props);
      
        this.state={
          refundGet:[]
        }
      
      } 
      
      componentDidMount(){
        this.retrieveRefundRequest();
      
      }
      
      retrieveRefundRequest(){
        axios.get("/refundGet").then(res =>{
          if(res.data.success){
            this.setState({
              refundGet:res.data.existingPosts
            });
      
            console.log(this.state.refundGet)
          }
      
      
        });
      }
      
      
      onDelete = (id) =>{
      
        axios.delete(`/refundGet/delete/${id}`).then((res) =>{
          this.retrieveRefundRequest();

          swal({
            title: "Success!",
            text: "Deleted Successfuly",
            icon: "success",
            button: "OK!",
          })
          
        })
      }
      
      filterData(refundGet,searchKey){
      
      const result = refundGet.filter((post) =>
        post.appoinmentRefNumber.toLowerCase().includes(searchKey) ||
        post.refundReason.toLowerCase().includes(searchKey) ||
        post.accountHolderName.toLowerCase().includes(searchKey) ||
        post.bankName.toLowerCase().includes(searchKey) ||
        post.branch.toLowerCase().includes(searchKey) ||
        post.bankAccountNumber.toLowerCase().includes(searchKey)
      )
        this.setState({refundGet:result})
      }
      
      handleSearchArea = (e) =>{
        const searchKey = e.currentTarget.value;
      
        axios.get("/refundGet").then(res =>{
          if(res.data.success){
      
            this.filterData(res.data.existingPosts,searchKey)
          }
      
        });
      }


    render() {
        return (
            <div className="container-xxl">
            <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
            <br/>
            <h2 style={{color:'#0d47a1'}}>All Refund Request</h2>
            </div>
                <div className="col-lg-3 mt-2 mb-2">
                <br/>
                <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    name="searchQueary"
                    onChange={this.handleSearchArea}>
                </input>
                </div>
            </div>
        
            <br/>
            <table className = "table table-bordered table-xl" id="content">
                <thead>
                    <tr>
                        <th scope="col">R_ID</th>
                        <th scope="col" className="col-1">Appoinment RefNumber</th>
                        <th scope="col" className="col-2">Refund Reason</th>
                        <th scope="col">Account Holder Name</th>
                        <th scope="col">Bank Name</th>
                        <th scope="col">Barnch</th>
                        <th scope="col" className="col-2">Bank Account Number</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.refundGet.map((refundGet,index) =>(
                    <tr key={index}>
                        <th scope = "row">{'R00'+index}</th>
                            <td>
                            <a href={`/refund_Details/${refundGet._id}`} style={{textDecoration:'none'}}>
                            {refundGet.appoinmentRefNumber}
                            </a>
                            </td>
                            <td>{refundGet.refundReason}</td>
                            <td>{refundGet.accountHolderName}</td>
                            <td>{refundGet.bankName}</td>
                            <td>{refundGet.branch}</td>
                            <td>{refundGet.bankAccountNumber}</td>
                            <td>
                                &nbsp;
                                <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(refundGet._id)}>
                                <i className="fas fa-trash-alt"></i>&nbsp;Delete
                                </a>
                            </td>
                    </tr>
                ))}
                </tbody>
            </table>
   
            <button className="btn btn-success"><a href={`/adminHome`} style={{textDecoration:'none',color:'white'}}>Back</a></button>
            <button type="button" className="btn btn-danger" style={{width:'250px', position:"absolute", right:"312px", marginTop:"130px"}}>
              <i href="#" onClick={() =>this.genPDF()} style={{textDecoration:'none', color:'white'}}>
                Download Refund Request Details
              </i> 
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
 
       
            </div>
        )
    }
}
