import React from "react";

const page = () => {
  return (
    <div className="container text-center border mt-2" style={{height:"400px"}}>
      <div className="row">
        <div className="col-4 border">
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="ccard_image" style={{height:"300px",width:"400px"}}/>
        </div>
        <div className="col border">byy</div>
      </div>

      <div className="row gap-1 ">
      <button style={{width:"300px"}} type="button" className="btn btn-secondary active m-2 p-3 " data-bs-toggle="button" aria-pressed="true">ADD TO CART</button>
      <button style={{width:"300px"}} type="button" className="btn btn-primary m-2 p-3 " disabled data-bs-toggle="button">BUY NOW</button>
      </div>
    </div>
  );
};

export default page;
