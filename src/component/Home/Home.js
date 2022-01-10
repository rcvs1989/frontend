import React, { Fragment } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
//import ProductCard from "./ProductCard.js";
//import MetaData from "../layout/MetaData";
//import { clearErrors, getProduct } from "../../actions/productAction";
//import { useSelector, useDispatch } from "react-redux";
//import Loader from "../layout/Loader/Loader";
//import { useAlert } from "react-alert";

const Home = () => {
 
  
  return (
    
        <Fragment>
         

          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            
          </div>
        </Fragment>
      );

  };


export default Home;
