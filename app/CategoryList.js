// CategoryList.js
"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CategoryList = ({ categoryFilter }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const apiUrl = `https://fakestoreapi.com/products${categoryFilter !== 'all' ? `?category=${categoryFilter}` : ''}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [categoryFilter]);

  return (
    <>
      <div className="row mx-auto">
        {/* Add your category buttons here if needed */}
      </div>

      {items.map((item) => (
        <div key={item.id} className="container-fluid">
          <div className="row bg-white mx-auto border" style={{ width: "1500px" }}>
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
  );
};

export default CategoryList;
