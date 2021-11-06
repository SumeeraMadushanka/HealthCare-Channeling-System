import React,{Component} from "react";
import axios from "axios";
import './AdminLogin.scss';

export default class AdminLogin extends Component{
    constructor(props) {
        super(props);
        this.state = {
           emailadd: "",
           password: "",
        };
        
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSumbit = (e) => {
        e.preventDefault();
        const data = {
            emailadd: this.state.emailadd,
            password: this.state.password,
        }
        console.log("Data sent ", data);

        axios.post("/admin/adminlogin", data).then((res) => {
            if((res.data.emailadd = this.state.emailadd) && (res.data.password = this.state.password)) {
                
                window.location = "/adminhome";
                   
            }
            else {
                 window.location = "#";

            }
  
        });
    }
    
    render(){
        
        return(

            <dev>
                <div className="bodys">
                    <div className="base-container">
                        <div className="box"><form onSubmit={this.handleSumbit}>
                            <dev className="header">
                                <div className="header1">Admin Login</div>
                                <div className="header2">welcome to your Admin Portal Login</div>
                            </dev>
                            <div className="content">
                                <div className="form">

                                    <div className="form-group">
                                        <input className="un" type="email" name="emailadd" placeholder="Email" required value={this.state.emailadd} onChange={this.handleChange}/>
                                    </div>

                                    <div className="form-group">
                                        <input className="pass" type="password" name="password" placeholder="Password" required value={this.state.password} onChange={this.handleChange}/>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="loginbuts">  <button type="submit" className="loginbuts">Log in</button></div>
                            </div>

                            </form>
                                <div className="buth">
                                    <a className="ref1" href="/lost">Lost your password?</a>
                                </div>

                                <div className="buth2">
                                    <a className="ref2" href="/create">Create New Account</a>
                                </div>
                        </div>
                    </div>
                </div>
            </dev>
        )
    }
}