

"use client";
import Link from "next/link";
import CategoryList from "../CategoryList";
import { useState, useEffect } from 'react';

const Product_list = () => {
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

      <div className="container-fluid">
        <div className="row my-3 mx-auto rounded-3" style={{ width: "1703px", height: "114px", backgroundColor: "#3722D3" }}>
          <h1 className=" text-white fw-semibold lh-sm">CATEGORY/PRODUCT NAME</h1>
          <h3 className="text-white fw-light lh-sm">Crafted Elegance: Artisanal Wooden Furniture </h3>
        </div>
        <div className="row mx-auto border" style={{ width: "1703px", height: "100px" }}>
          <div className="col-3"></div>
        </div>

      </div>

      
      <div className="col-2 border  d-flex bol"style={{height:"800px",width:"300px;"}}>
        <div className="container-fluid px-3 ">
          <div className="d-flex flex-wrap justify-content-around">
            <div className="row my-2 mx-auto bg-white border"style={{ width: "1603px", height: "538px",  }}>
              <div className="col-2.4 card m-3 border"style={{ width: "18rem", height: "23rem" }}></div>    
            </div>  
          </div>
        </div>
      </div>  
        

    </>
  )
}
export default Product_list;  

// items.map((item) => (
//   <div key={item.id} className="col-2.4 card m-3 border"style={{ width: "18rem", height: "23rem" }}>
    
//     <div className="row mx-auto bg-white border" style={{ width: "1000px" }}>
//       <div className="col-3 m-3 border">
//         <Link href={`/products/${item.id}`}>
//           <img className="p-3" src={item.image} alt="" style={{ width: "260px", height: "289px" }} />
//         </Link>
//       </div>
//       <div className="col">
//         <p>{item.title}</p>
//         <p>₹{item.price}</p>
//       </div>
//     </div>
//   </div>
// ))} */}
