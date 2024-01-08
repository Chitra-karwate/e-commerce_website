
"use client";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  if (product.length === 0) {
    return <p>Loading....</p>;
  }

const categoriesToFilter = ["jewelery", "men's clothing", "electronics","women's clothing"];
const filteredProducts = product.filter((product) => categoriesToFilter.includes(product.category));

  return (
    <div className="container">
      <div className="card mb-3 ">
        <div className="row g-0">
          { filteredProducts.map((product) => {
            return (
              <>
                <div
                  className="col-md-4 p-2 border"
                  style={{ height: "350px" }}
                >
                  <img
                    src={product.image}
                    className="img rounded-start "
                    alt=""
                    style={{ width: "100%", height: "300px" }}
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
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
