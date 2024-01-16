"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  
  const categories = Array.from(
    new Set(items.map((product) => product.category))
  );

  return (
    <>
      <div className="container-fluid px-4">
        {categories.map((category) => {
          const categoryItems = items.filter(
            (product) => product.category === category
          );

          return (
            <div key={category} className="row border">
              {categoryItems.map((item,index) => (
                <div key={index} className="col-3">
                  <div className="card card-block p-3">
                    <img src={item.image} alt="" className="images" />
                    <div className="d-flex justify-content-center flex-column align-items-center">
                      <p>{item.title.substring(0, 20)}</p>
                      <p>₹{item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="d-flex justify-content-end">
                  <a href="/explore">
                    <button type="button" className="btn btn-secondary my-1">
                      Explore &#8594;
                    </button>
                  </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
