import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="col-md-3 mt-5 mx-auto row">
                    <div style={{marginTop:'80px'}}>

                        <button className="btn btn-info " type="submit" style={{marginTop:'60px', marginLeft:'8px', paddingRight:'100px', paddingLeft:'100px'}}>
                            <a href={"#"} style={{textDecoration:'none',color:'white'}}>
                                Patient Login
                            </a>
                        </button>
                        <br/>
                        <button className="btn btn-primary " type="submit" style={{marginTop:'40px', marginLeft:'8px', paddingRight:'100px', paddingLeft:'100px'}}>
                            <a href={"/doctorlogin"} style={{textDecoration:'none',color:'white'}}>
                                Doctor Login
                            </a>
                        </button>

                        <br/>
    
                        <button className="btn btn-success " type="submit" style={{marginTop:'40px', marginLeft:'8px', paddingRight:'90px', paddingLeft:'90px'}}>
                            <a href={"#"} style={{textDecoration:'none',color:'white'}}>
                                Employee Login
                            </a>
                        </button>
                        
                        <br/>
            
                        <button className="btn btn-danger " type="submit" style={{marginTop:'40px', marginLeft:'8px'}}>
                            <a href={"/adminlogin"} style={{textDecoration:'none',color:'white', paddingRight:'90px', paddingLeft:'90px'}}>
                                Admin Login
                            </a>
                        </button>

                    </div>         
                </div> 
            </div>
        )
    }
}
