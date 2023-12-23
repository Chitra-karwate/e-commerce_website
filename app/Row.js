import React from "react";
import Link from "next/link";

const Row = () => {
  const rows = [
    [
      { id: 1, 
        imageUrl: "realme.webp",
        title:"Realme Moblie",

    },
      { id: 2, imageUrl: "apple.webp",
        title:"APPLE iPhone"
     },
      { id: 3, imageUrl: "poco.webp",
        title:"POCO C51 " 
    },
      { id: 4, imageUrl: "oneplus.webp",
        title:"OnePlus Nord", 
     },
      { id: 5, imageUrl: "samsung.webp",
        title:"SAMSUNG Galaxy", 
     },
    ],
    [
      { id: 6, imageUrl: "drees.webp",
        title:"western dress" ,
    },
      { id: 7, imageUrl: "sut.webp ",
        title:"panjabi suit",
    },
      { id: 8, imageUrl: "saree.webp",
        title:"saree" ,
    },
      { id: 9, imageUrl: "sweatshirt.webp",
        title:"sweatshirt" ,
    },
      { id: 10, imageUrl: "top1.webp", 
        title:"Red Top",
    },
        
    ],
    [
      { id: 6, imageUrl: "teddy.webp",
        title:"western dress" ,
    },
      { id: 7, imageUrl: "Toy.webp ",
        title:"panjabi suit",
    },
      { id: 8, imageUrl: "pens.webp",
        title:"saree" ,
    },
      { id: 9, imageUrl: "bicycle.webp",
        title:"sweatshirt" ,
    },
      { id: 10, imageUrl: "helmet.webp", 
        title:"Red Top",
    },
  ]

    
       
]

  return (
    <div className="container-fluid px-3 ">
      <div className="d-flex flex-wrap justify-content-around">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="row my-2 mx-auto bg-white border"
            style={{ width: "1603px", height: "538px",  }}
          >
            <h5 className="p-4">Best Moblie</h5>
            <h5 className="nav justify-content-end p-3">
              <Link href="Product_list/">
                <button>View All</button>
              </Link>
            </h5>
            {row.map((item) => (
              <div key={item.id} className="col-2.4 card m-3 border"style={{ width: "18rem", height: "23rem" }}>
                 <Link href="Product_list/product_details">
                  <img className="card-img-top p-3 text-center"src={item.imageUrl}alt={`Product ${item.id}`}/>
                </Link>
                <div>
                  <p className="text-center"><strong>{item.title}</strong></p>
                </div>  
                 
              </div>
              
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
