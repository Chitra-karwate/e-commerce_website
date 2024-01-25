"use client";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
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
          ).slice(0,4)

          return (
            <div key={category} className="row mx-auto box">
              <h2>{category}</h2>
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
