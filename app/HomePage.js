// "use client";
// import React, { useEffect, useState } from "react";

// function Home() {
//   const [data, setData] = useState([]);

//   const fetchData = () => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((res) => {
//         setData(res);
//       })
//       .catch((error) => {
//         console.log("Fetch error", error);
//       });
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   const renderCategoryRows = () => {
//     return {
//       "men's clothing": data
//         .filter((item) => item.category === "men's clothing")
//         .slice(0, 4),
//       "women's clothing": data
//         .filter((item) => item.category === "women's clothing")
//         .slice(0, 4),
//       electronics: data
//         .filter((item) => item.category === "electronics")
//         .slice(0, 4),
//       jewelery: data.filter((item) => item.category === "jewelery").slice(0, 4),
//     };
//   };

//   const categories = renderCategoryRows();

//   return (
//     <>
//       <>
//         {Object.keys(categories).map((category) => (
//           <div key={category} className="card card-block p-5">
//             <div className="row">
//               {categories[category].map((item) => (
//                 <div key={item.id} className="col-md mb-4">
//                   <img src={item.image} alt="" className="images" />
//                 </div>
//               ))}
//             </div>
//             <div className="row ">
//               {categories[category].map((item) => (
//                 <div key={item.id} className="col-md mb-2">
//                   <div className="d-flex justify-content-center flex-column align-items-center">
//                     <p>{item.title}</p>
//                     <p>{item.price}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="d-flex justify-content-end">
//               <a href="/explore">
//                 <button type="button" className="btn btn-secondary my-1">
//                   Explore &#8594;
//                 </button>
//               </a>
//             </div>
//           </div>
//         ))}
//       </>
//     </>
//   );
// }

// export default Home;


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
                  <a>
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