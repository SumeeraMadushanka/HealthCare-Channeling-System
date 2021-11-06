import React, { Component } from 'react'


export default class AdminHome extends Component {
    render() {
        return (
          
            <div style={{marginTop:'190px', marginLeft:'260px'}}>
                <table className="table1">
                    <tr>
                        <th><a href="#"><img src="/images/employeemanagment.png" width="110" height="110" className="d-inline-block align-top img-thumbnail " alt=""/></a></th>
                        <th><a href="#"><img src="/images/surgerymanagement.png" width="110" height="110" className="d-inline-block align-top img-thumbnail " alt=""/></a></th>           
                        <th><a href="#"><img src="/images/adminmanagement.png" width="110" height="110" className="d-inline-block align-top img-thumbnail " alt=""/></a></th>
                        <th><a href="/refundView"><img src="/images/transactionmanagement.png" width="110" height="110" className="d-inline-block align-top img-thumbnail " alt=""/></a></th>
                    </tr>
                    <tr>
                        <td><h4 className="hcolor">Employee<br/>Management</h4></td>
                        <td><h4 className="hcolor">Surgery<br/>Management</h4></td>
                        <td><h4 className="hcolor">Admin<br/>Management</h4></td>
                        <td><h4 className="hcolor">Transaction/Billing<br/>Management</h4></td>
                    </tr>
                </table>
            </div>
            
        )
    }
}
