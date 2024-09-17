import React from "react";

export default function ProductListItem(props) {
  return (
    <div
      className="d-flex m-4 align-items-center justify-content-center">

      <img
        src={props.image}
        height={150}
        width={150}
        alt={props.title}
        className="border-9 me-4"
      />
      <div>
      <h5 className="card-title mt-3"> {props.title} </h5>
      <h6 className="mt-2 me-4"> Price : {`$${props.price}`}</h6>
      <h6 className="mt-2 me-4"> Rating : {props.Rating} </h6>
      <div className="mt-4  me-4">
        </div>
        <button className="btn btn-success ms-3" onClick={props.incrementItem}> + </button>
        <span ClassName="ms-3"> Quantity {props.count} </span>
        <button className="btn btn-danger" onClick={props.decrementItem}> - </button>
        <button className="btn btn-danger ms-2" onClick={props.removeItem} >
             Remove </button>
        
      </div>
    </div>
  )
}