import React from "react";
import "../Styles/Mainpage.css";
import { Link } from "react-router-dom";
// import Login from "./Login";

function Mainpage() {
  return (
    <div className="upper">
      <nav className="container3">
        <Link to="/Login" style={{ textDecoration: "none" }}>
          <button className="bt-login">Login</button>
        </Link>
      </nav>
      <div className="container4">
        <table class="custom-table">
          <tr>
            <th>Sno</th>
            <th>Application Name</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Hospital Management</td>
            <td>
              <Link to="/description1" style={{ textDecoration: "none" }}>
                <button className="open">Open</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Restaurent Management</td>
            <td>
              <Link to="/description2" style={{ textDecoration: "none" }}>
                <button className="open">Open</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Hostel Management</td>
            <td>
              <Link to="/description4" style={{ textDecoration: "none" }}>
                <button className="open">Open</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Library Management</td>
            <td>
              <Link to="/description5" style={{ textDecoration: "none" }}>
                <button className="open">Open</button>
              </Link>
            </td>
          </tr>
        </table>
        <div className="edit">
          <Link to="/Editor" style={{ textDecoration: "none" }}>
            <button className="edit-App">CheckEditor</button>
          </Link>
        </div>
      </div>
      <div className="upload">
        <Link to="/Secondpage" style={{ textDecoration: "none" }}>
          <button className="b-log">Upload Your Aplications</button>
        </Link>
      </div>
    </div>
  );
}

export default Mainpage;
