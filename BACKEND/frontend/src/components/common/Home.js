import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div style={{ marginTop: "330px", marginLeft: "290px" }}>
        <table className="table1">
          <tr>
            <th>
              <img
                src="/images/channeling.png"
                width="110"
                height="110"
                className="d-inline-block align-top img-thumbnail "
                alt=""
              />
            </th>
            <th>
              <img
                src="/images/patientinfo.png"
                width="110"
                height="110"
                className="d-inline-block align-top img-thumbnail "
                alt=""
              />
            </th>
            <th>
              <a href="/add">
                <img
                  src="/images/payment.png"
                  width="110"
                  height="110"
                  className="d-inline-block align-top img-thumbnail "
                  alt=""
                />
              </a>
            </th>
            <th>
              <img
                src="/images/surgery.png"
                width="110"
                height="110"
                className="d-inline-block align-top img-thumbnail "
                alt=""
              />
            </th>
            <th>
              <img
                src="/images/pharmacy.png"
                width="110"
                height="110"
                className="d-inline-block align-top img-thumbnail "
                alt=""
              />
            </th>
            <th>
              <img
                src="/images/services.png"
                width="110"
                height="110"
                className="d-inline-block align-top img-thumbnail "
                alt=""
              />
            </th>
          </tr>

          <tr>
            <td className="td1">
              <h4 className="hcolor">Channeling</h4>
            </td>
            <td className="td1">
              <h4 className="hcolor">Patient Info</h4>
            </td>
            <td>
              <h4 className="hcolor">Payment</h4>
            </td>
            <td className="td1">
              <h4 className="hcolor">Surgery</h4>
            </td>
            <td className="td1">
              <h4 className="hcolor">Pharmacy</h4>
            </td>
            <td className="td1">
              <h4 className="hcolor">Services</h4>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
