import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {useDispatch} from "react-redux"
import {addtoCart} from "../features/cart/cartSlice.js"

function SingleProduct() {
    const productId = useParams()
    const [productData,setProductData] = useState([])
    const dispatch = useDispatch()
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${productId.id}`).then((res)=>{
          return res.json()
        }).then((data)=>{
            setProductData(data)
        })
      },[])

      console.log(productData)

    return ( 
        <>
            <MDBContainer  className="my-5" >
      <MDBRow className="justify-content-center">
        <MDBCol md="6" lg="6" xl="3">
          <MDBCard style={{ borderRadius: "15px" , backgroundColor:"black" , color:"white" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-overlay"
            >
              <MDBCardImage
                src={productData.images && productData.images[0]}
                fluid
                className="w-100"
                style={{
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                }}
              />
              <a href="#!">
                <div className="mask"></div>
              </a>
            </MDBRipple>
            <MDBCardBody className="pb-0">
              <div className="d-flex justify-content-between">
                <div>
                  <p>
                    <a href="#!" className="text-light">
                      {productData.title}
                    </a>
                  </p>
                  <p className="small text-muted text-light">{productData.brand}</p>
                </div>
                <div>
                  <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                  </div>
                  <p className="small text-muted">Rated {productData.rating}/5</p>
                </div>
              </div>
            </MDBCardBody>
            <hr class="my-0" />
            <MDBCardBody className="pb-0">
              <div className="d-flex justify-content-between">
                <p>
                  <a href="#!" className="text-light">
                    Price : {productData.price} $
                  </a>
                </p>
                <p className="text-light">Stock : {productData.availabilityStatus}</p>
              </div>
              <p className="small text-muted">{productData.returnPolicy}</p>
            </MDBCardBody>
            <hr class="my-0" />
            <MDBCardBody className="pb-0">
              <div className="d-flex justify-content-between align-items-center pb-2 mb-4">
                <Link to={"/homepage"} className="text-dark fw-bold">
                
                <MDBBtn color="danger">Cancel</MDBBtn>
                </Link>
                <Link to={"/cart"}>
                <MDBBtn color="success" onClick={()=>{dispatch(addtoCart(productData))}}>Add To Cart</MDBBtn>
                </Link>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
        </>
     );
}

export default SingleProduct;