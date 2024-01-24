import React from 'react'

const Explore=()=>{
  return (
    <>
        <div className="container-fluid">
          <div className="row my-3 mx-auto row1 rounded-3" >
            <h1 className="fw-semibold lh-sm">CATEGORY/PRODUCT NAME</h1>
            <h3 className="fw-light lh-sm">Crafted Elegance: Artisanal Wooden Furniture </h3>
          </div>
          <div class="row mx-auto text-center  row6">
            <div className='col-md-2 offset-md-3 p-3'>Filters:Not Selected</div>
            <div className='col-md-3 offset-md-4 p-3  border'>
                Sort By:Name A -- Z 
            </div>
            
          </div>    
         
          <div className="row mx-auto mt-3 row3 ">
            <div  className="col-2 b column" >
            <div className='row  column5 '>
              <div className='col-md-2 offset-md p-3'>Filter</div>
              <div className='col-md-2 offset-md-7 p-3 text-primary'>CLEAR</div>
              
            </div>  
            <div className='border border-black mb-4'></div> 
             
                <p className="">Select Brand</p>
                  <p className='mb-2'>
                    <img src="logo4.png"/>
                    Nike
                  </p>
                  <p className='mb-2'>
                    <img src="logo4.png"/>
                    Puma
                  </p>
                  <p className='mb-4'>
                    <img src="logo4.png"/>
                    Reebok
                  </p>
                  <div className='col border border-primary mb-4 box2'>more 34 + </div>
            
              <div className='border border-black mb-4'></div>
              <div className='justify-content-star '>
                <p className='b-white'>Select Star Rating</p>
                  
                <div  className='mb-2 '>
                  
                  <img className="ml-2"src="logo4.png"/>
                  <img src="star1.png"/>
                  & Up
                </div>
                <div className='mb-2 '>
                  <img src="logo4.png"/>
                  <img src="star2.png"/>
                  & Up
                </div>
                <div className='mb-2 '>
                  <img src="logo4.png"/>
                  <img src="star3.png"/>
                  & Up
                </div>
                <div className='mb-2  '>
                  <img className='pl-2' src="logo4.png"/>
                  <img src="star4.png"/>
                  & Up
                </div>
            
                <div className='mb-3'>
                  <img src="logo4.png"/>
                  <img src="star5.png"/>
                </div>
                
              </div>
              <div className='border border-black mt-4'></div> 
              <p className='b-white mt-3'>Select Prize Range</p>
                <p  className='mb-2'>
                  
                  <img className="ml-2"src="logo4.png"/>
                    p to 200
                </p>
                <p className='mb-2'>
                  <img src="logo4.png"/>
                    up to 500
                </p>
                <p className='mb-2'>
                  <img src="logo4.png"/>
                  up to 700

                </p>
                <p className='mb-2'>
                  <img className='pl-2' src="logo4.png"/>
                  
                  up to 1000
                </p>
            
                <p className=' mb-3'>
                  <img src="logo4.png"/>
                   up to 1250
                </p>
                <div className='col border border-primary mb-4 box2'>more 34 + </div>
            
                <div className='border border-black mb-4'></div>
            </div>
            <div className='row p-2 row5 '>
              <div className="row mt-3  mx-auto row4 border">
                <div className="col-3 card m-3  border"style={{ width: "25rem", height: "23rem" }}></div>
                <div className="col-3 card m-3 border"style={{ width: "25rem", height: "23rem" }}></div>
                <div className="col-3 card m-3 border"style={{ width: "25rem", height: "23rem" }}></div>
              </div>
              <div className="row mx-auto row4 border">
                <div className="col-3 card m-3  border"style={{ width: "25rem", height: "23rem" }}></div>
                <div className="col-3 card m-3 border"style={{ width: "25rem", height: "23rem" }}></div>
                <div className="col-3 card m-3 border"style={{ width: "25rem", height: "23rem" }}></div>
              </div>
              <div className="row mx-auto row4 border">
                <div className="col-3 card m-3  border"style={{ width: "25rem", height: "23rem" }}></div>
                <div className="col-3 card m-3 border"style={{ width: "25rem", height: "23rem" }}></div>
                <div className="col-3 card m-3 border"style={{ width: "25rem", height: "23rem" }}></div>
              </div>
            </div>
            
            
          </div>
          
      </div>
    </>
  )
}

export default Explore;
