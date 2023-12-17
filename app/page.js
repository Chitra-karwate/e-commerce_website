import React from 'react';
import CarouselComponent from "@/Components/CarouselComponent";
import data from './data';


const ProductCategory = ({ title, products }) => (
  <div className="container-fluid mt-3" style={{height:"400px"}}>
    <div className="row mx-auto  mt-5" style={{ width: "1581px", height: "150px" }}>
      <div className="col ">
        <h3 style={{ marginBottom: 0, overflow: "hidden"}}>{title}</h3>
      </div>
      <div className="col-1 " style={{ width: "120px"}}>
        <a className="nav-link active fs-5" aria-current="page" href="./view">View All</a>
      </div>

      <div className="container text-center mb-5">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col border " style={{ height: "400px", width: "100%" }}>
              {product.image ? (
                <>
                  <img src={product.image} alt={product.title} style={{ width: '100%',height:"300px"}}  />
                  <h4>{product.title.substring(0, 12)}</h4> 
                  <p>₹{product.price}</p>
                </>
              ) : (
                <p>No image available</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Page = () => {
  const categories = [
    { title: "Men's Clothing", products: data.slice(0, 4) },
    { title: "Jewelry", products: data.slice(4, 8) },
    { title: "Electronics", products: data.slice(8, 12) },
    { title: "Women's Clothing", products: data.slice(12, 16) }
  ];

  return (
    <>
      <CarouselComponent />
      {categories.map((category) => (
        <ProductCategory key={category.title} title={category.title} products={category.products} />
      ))}
    </>
  );
};

export default Page;
