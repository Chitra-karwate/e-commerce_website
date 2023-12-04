import React from "react";
import data from "@/app/data";
import { headers } from "@/next.config";

const Card = () => {
  return (
    <div className="container-fluid px-4">
    <div className="d-flex flex-wrap justify-content-around">
      {data.map((item) => (
        <div key={item.id} className="card m-2" style={{ width: "18rem ", height:'15rem' }}>
          <img src={item.image} className="card-img-top" alt={item.alt} />
          <div className="card-body">
            <p className="card-text">{item.id}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Card;
