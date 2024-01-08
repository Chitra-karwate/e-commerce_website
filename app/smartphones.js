// // Import necessary modules
// "use client"
// import Link from "next/link";
// import { useState, useEffect } from "react";

// // Define the Category component
// const Smartphones= () => {
//   // State to manage the displayed data
//   const [data, setData] = useState([]);

//   // Function to filter data based on category
//   const filterResult = async (catItem) => {
//     try {
//       let apiUrl = 'https://dummyjson.com/products/category/';
//       if (catItem !== 'all') {
//         apiUrl += catItem.toLowerCase();
//       }
      
//       const response = await fetch(apiUrl);
//       const result = await response.json();

//       setData(result);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   // Fetch data when the component mounts (initial load)
//   useEffect(() => {
//     filterResult('all');
//   }, []);

//   return (
//     <>
//       <div className="container-fluid px-3 ">
//         <div className="d-flex flex-wrap justify-content-around">
//           <div className="row my-2 mx-auto bg-white border" style={{ width: "1603px", height: "538px" }}>
//             <h5 className="nav justify-content-end p-3">
//               <Link href="/products">
//                 <button onClick={() => filterResult("all")}>View All</button>
//               </Link>
//               <Link href="/Smartphoes">
//                 <button onClick={() => filterResult("Smartphones")}>Smartphones</button>
//               </Link>
//             </h5>

//             {Array.isArray(data) && data.map((values) => (
//               <div key={values.id} className="col-3.4 card m-3 border" style={{ width: "18rem", height: "23rem" }}>
//                 <Link href={`/Smartphones/${values.id}`}>
//                   <a>
//                     <img className="card-img-top p-3 text-center" src={values.thumbnail} alt="" />
//                   </a>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Smartphones;
