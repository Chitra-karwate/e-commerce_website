
  const Product_details = ({match}) => {
    const ProductId=match.params.id;
  

  
    return(
        <>
            <div className="container-fulid ">
                <div className="row border mx-auto justify-content-center" style={{height:"50px"}}>
                    <div className="col-1 p-2 border"><b>Electronic</b></div>
                    <div className="col-1 p-2 border"><b>TVs&Appliances</b></div>
                    <div className="col-1 p-2 border text-center"><b>Men</b></div>
                    <div className="col-1 p-2 border"><b>Women</b></div>
                    <div className="col-1 p-2 border"><b>Baby&Kids</b></div>
                    <div className="col-1 p-2 border text-center"><b>Home&Furniture</b></div>
                    <div className="col-2 p-2 border text-center"><b>Sports,Books&More</b></div>
                    <div className="col-1 p-2 border"><b>Flights</b></div>
                </div>
                <div className="container">
                    <div className="row ">
                        <div className="col-md-4 border border-dark mt-2" style={{height:"400px"}}>
                        </div>
                        <div className="col-md-7 border border-dark mt-2 mx-3" style={{height:"400px"}}></div>
                        <button className="bg-warning p-4 m-2" type="submit" style={{width:"200px",height:"30px"}}>ADD TO CART</button>
                        <button className="bg-orange p-4 m-2" type="submit"style={{width:"200px",height:"30px"}}>BUY NOW</button>
                    </div>
                </div>
            </div>
        </>    
	)
}
export default Product_details;