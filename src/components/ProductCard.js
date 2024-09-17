import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard(props) {
  const navigate = useNavigate();
  return (
    <div
      className="card m-2 cursor-pointer"
      style={{ width: 300 }}
      role="button"
      onClick={() => navigate(`/Product/${props.id}`)}
    >
      <div className="d-flex justify-content-center mt-2">
        <img
          src={props.image}
          height={150}
          width={150}
          alt={props.title}
          className="border-9"
        />
      </div>
      <div className="card-body">
        <h5 className="card-title mt-3"> {props.title} </h5>
        <h6 className="mt-2"> Price : {`$${props.price}`}</h6>
        <h6 className="mt-2"> Rating : {props.Rating} </h6>
        <div>
          {props.count > 0 ? (
            <button className="btn btn-success"> Available </button>
          ) : (
            <button className="btn btn-outline-danger"> Out of Stock </button>
          )}
        </div>
      </div>
    </div>
  );
}
