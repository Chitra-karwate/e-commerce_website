"use client";
import Link from "next/link";
import { useState, useEffect } from 'react';

const  ProductList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  return (
    <>
      <div className="container-fluid px-5">
        <div className="row">
          {items.map((item) => {
            return (
              <div key={item.category} className="col-3">
                <Link href={`/products/${item.category}`}>
                  <div className="card card-block p-2">
                    <img
                      src={item.image}
                      alt=""
                      width="100%"
                      height={300}
                    />
                    <div className="d-flex justify-content-center flex-column align-items-center">
                      <p >{item.title}</p>
                      <p>₹{item.price}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList ;