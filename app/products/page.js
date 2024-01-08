

"use client";
import Link from "next/link";
import CategoryList from "../CategoryList";
import { useState, useEffect } from 'react';

const  Product_list = () => {
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
      <div className="row mx-auto">
        <CategoryList categoryFilter="electronics" />
        <CategoryList categoryFilter="tv_appliances" />
        <div className="col-1 p-2 text-center"><b>Men</b></div>
        <div className="col-1 p-2 "><b>Women</b></div>
        <div className="col-1 p-2 "><b>Baby&Kids</b></div>
        <div className="col-1 p-2 text-center"><b>Home&Furniture</b></div>
      </div>  


      {items.map((item) => (
        <div key={item.id} className="container-fluid">
          <div className="row  bg-white mx-auto border" style={{ width: "1500px" }}>
            <div className="col-3 m-3 border">
              <Link href={`/products/${item.id}`}>
                <img className="p-3" src={item.image} alt="" style={{ width: "260px", height: "289px" }} />
              </Link>
            </div>
            <div className="col">
              <p>{item.title}</p>
              <p>₹{item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )    
}  
export default Product_list;  