import React from "react";
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
import { useDispatch, useSelector } from "react-redux";
import ClearIcon from '@mui/icons-material/Clear';
import { deleteWishlist } from "../features/wishlist/wishSlice";

function Wishlist() {
  const wishlist = useSelector((state)=>state.AllWishlist.wishlist)
  const disptach = useDispatch()
  return (
    <MDBContainer  className="my-3 text-center">
      <h4 className="mt-4 mb-5">
        <strong>Wishlist Items</strong>
      </h4>

      <MDBRow>

      {
         wishlist.length === 0 ? <h1>No Wishlist Products..🙂</h1> :  wishlist.map((value,index)=>(
            <MDBCol md="6" lg="4" className="mb-4">
        
          <MDBCard
          className="bg-dark text-light" 
          >
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
           
              <MDBCardImage
                src={value.images[0]}
                fluid
                className="w-100"
              />
               <ClearIcon onClick={()=>{disptach(deleteWishlist(value))}}/>
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      <span className="badge bg-primary ms-2">New</span>
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">{value.title}</h5>
              </a>
              <a href="#!" className="text-reset">
                <p>{value.category}</p>
              </a>
              <h6 className="mb-3">$ {value.price}</h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
          ))
        }
      </MDBRow>
    </MDBContainer>
  );
}

export default Wishlist;