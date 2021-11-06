import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert';

export default class AllPayersDetails extends Component {

    constructor(props){
        super(props);
      
        this.state={
          posts:[]
        }
      
      } 
      
      componentDidMount(){
        this.retrievePosts();
      
      }
      
      retrievePosts(){
        axios.get("/posts").then(res =>{
          if(res.data.success){
            this.setState({
              posts:res.data.existingPosts
            });
      
            console.log(this.state.posts)
          }
      
      
        });
      }
      
      
      onDelete = (id) =>{
      
        axios.delete(`/post/delete/${id}`).then((res) =>{
          this.retrievePosts();

          swal({
            title: "Success!",
            text: "Deleted Successfuly",
            icon: "success",
            button: "OK!",
          })
          
        })
      }
      
      filterData(posts,searchKey){
      
      const result = posts.filter((post) =>
        post.payerName.toLowerCase().includes(searchKey) ||
        post.nicNo.toLowerCase().includes(searchKey) ||
        post.contactNo.toLowerCase().includes(searchKey) ||
        post.emailAddress.toLowerCase().includes(searchKey) ||
        post.address.toLowerCase().includes(searchKey)
      )
        this.setState({posts:result})
      }
      
      handleSearchArea = (e) =>{
        const searchKey = e.currentTarget.value;
      
        axios.get("/posts").then(res =>{
          if(res.data.success){
      
            this.filterData(res.data.existingPosts,searchKey)
          }
      
        });
      }


    render() {
        return (
            <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
          <br/>
          <h2 style={{color:'#0d47a1'}}>All Payment Information</h2>
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
        <table className = "table table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Payer Name</th>
              <th scope="col">NIC No</th>
              <th scope="col">Contact No</th>
              <th scope="col">Email Address</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index) =>(
              <tr key={index}>
                <th scope = "row">{'P00'+index}</th>
                <td>
                  <a href={`/post/${posts._id}`} style={{textDecoration:'none'}}>
                  {posts.payerName}
                  </a>
                </td>
                <td>{posts.nicNo}</td>
                <td>{posts.contactNo}</td>
                <td>{posts.emailAddress}</td>
                <td>{posts.address}</td>
                <td>
                  <a className="btn btn-warning" href ={`/edit/${posts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(posts._id)}>
                    <i className="fas fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
       
        </div>
        )
    }
}
