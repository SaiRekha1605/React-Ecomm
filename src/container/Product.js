import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductList } from "../data/ProductList";
import { addItem } from "../redux/reducer/Cart";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const Params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const props = ProductList.find(
    (element) => element.id === parseInt(Params.id));
  const [alert, setAlert] = useState(false);
  const list = useSelector((state) => state.cart.list);

  const element = list.find((item) => item.id === props.id);

  const addToCart = () => {
    setAlert(true);
    setTimeout(() => setAlert (false), 2000)

    dispatch(addItem(props));
  };
  return (
    <div className="card m-2" >
      {alert && <span className="alert alert-success h5"> Item Added To Cart </span>}
      <div className="d-flex justify-content-center mt-2">
        <img
          src={props.image}
          height={400}
          width={400}
          alt={props.title}
          className="border-9"
        />
      </div>
      <div className=" mt-3 card-body">
        <h4 className="card-title mt-3"> {props.title} </h4>
        <h5 className=""> {props.description}</h5>
        <h6 className="mt-2"> Price : {`$${props.price}`}</h6>
        <h6 className="mt-2"> Rating : {props.Rating} </h6>
        <div className="mt-4">
          {props.count > 0 ? (
            <>
              <button className="btn btn-success" onClick={() => navigate(`/checkout/${props.id}`)}> Buy Now </button>
              {element?.count > 0 ? (
                <button
                  className="ms-3 btn btn-outline-warning" onClick={() => navigate('/cart')}>
                  Go To Cart
                </button>
              ) : (
                <button className="ms-3 btn btn-success" onClick={addToCart}> Add To Cart
                </button>)}
            </>
          ) : (
            <button className="btn btn-outline-danger"> Out of Stock </button>
          )}
        </div>
      </div>
    </div>
  );
}
