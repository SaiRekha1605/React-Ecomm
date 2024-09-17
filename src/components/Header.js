import React from "react";
import { useNavigate } from "react-router-dom";


export default function Header() {
  const navigate = useNavigate()
  return (
    <div className="header">
      <h2 className="h2"> Ecommerce Webiste </h2>
      <div className="row">
        <div className="col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex">
          <button className="btn-1 me-2 rad p-2" onClick={() => navigate("/")}>Home</button>
          <input
            className="p-1 form-control"
            type="Search"
            placeholder="search..."
          />
          <button className="btn-1 ms-3 p-2 rad" onClick = {() => navigate('/cart')}> Cart </button>
        </div>
      </div>
    </div>
  );
}
