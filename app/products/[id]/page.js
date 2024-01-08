

"use client";
import { useEffect, useState } from "react";

const ProductDetail = (props) => {
  let id = props.params.id;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
        });
    }
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 p-5 border" >
            <img
              src={product.image}
              className="img-fluid rounded-start " 
              alt={product.title}
              width="100%"

            />
          </div>
          <div className="col-md-8 border">
            <div className="card-body">
              <h2 className="p-2">{product.category}</h2>
              <h4 className="p-2 card-title">{product.title}</h4>
              <h5 className="p-2">₹{product.price}</h5>
              <h5 className="p-2 card-text">{product.description}</h5>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
