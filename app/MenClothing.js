"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const MenClothingPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  const MenClothProducts = items.filter(
    (product) => product.category === "men's clothing"
  );

  return (
    <>
      <div className="container-fluid px-4">
        <div className="row g-3 ">
          <h1>Men's clothing</h1>
          {MenClothProducts.map((item) => {
            return (
              <div key={item.category} className="col-3">
                <div className="card card-block p-3">
                  <img src={item.image} alt="" width="100%" height={300} />
                  <div className="d-flex justify-content-center flex-column align-items-center">
                    <p>{item.title.substring(0, 20)}</p>
                    <p>₹{item.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-end">
          <a href="/explore">
            <button type="button" className="btn btn-secondary my-1">
              Explore &#8594;
            </button>
          </a>
        </div>{" "}
      </div>
    </>
  );
};

export default MenClothingPage;


MenClothingPage.js
