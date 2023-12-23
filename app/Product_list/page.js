"use client";
import { useState, useEffect } from 'react';

const Product_list = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
      });
  }, []);

  return (
    <div className="row mx-auto">
      <div className="col-1 p-2 "><b>Electronic</b></div>
      <div className="col-1 p-2 "><b>TVs&Appliances</b></div>
      <div className="col-1 p-2 text-center"><b>Men</b></div>
      <div className="col-1 p-2 "><b>Women</b></div>
      <div className="col-1 p-2 "><b>Baby&Kids</b></div>
      <div className="col-1 p-2 text-center"><b>Home&Furniture</b></div>

      <div className="container-fluid">
        <div className="row mx-auto  mx-2" style={{ width: "1500px" }}>
          <div className="col-3 border">
            
          </div>
          <div className="col border">
            <a className="nav-link" href="/Product_list/product_details">
              {photos.map((photo) => (
                <div key={photo.id} className="row">
                  <div className="col-3 border">
                    <img className="p-3"src={photo.image} alt={photo.title} style={{ width: "260px", height: "289px" }} />
                  </div>
                  <div className="col border">
                    <p><strong>{photo.name}</strong></p>
                    <p>{photo.company}</p>
                    <p>{`$${photo.price}`}</p>
                    
                    <p>{photo.description}</p>
                    <p>{photo.category}</p>
                    <p>{photo.featured}</p>
                  </div>
                </div>
              ))}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_list;
