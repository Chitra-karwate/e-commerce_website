import React from "react";
import "./product.css"
function ProductDetail() {
  const data = [
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    }
  ];

  const product = data[0];

  return (
    <>
      <div className="container-fluid p-3">
        <div className="row justify-content-center">
          <div className="col-4 border">
            <img src={product.image} alt={product.title} className="imagepage" />
          </div>
          <div className="col-4 border p-5">
            <h4 >category/{product.category}</h4>
            <h2>{product.title}</h2>
            <img src="Frame 141.png"/>
            <h5>{product.description}</h5>
            <h3>${product.price}</h3>
            <button type="button" className="btn btn-secondary">Add to Cart &#8594;</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
