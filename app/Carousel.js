import Link from "next/link";
const Carousel=()=>{
    return(
        <>
           <div className="container-fluid">                
                <div className="row my-3 mx-auto bg-white border"style={{ width: "1603px", height: "114px" }}>
                        
                        <div className="row justify-content-center">
                        <div className="col-1 m-3 ">
                            <Link class="nav-link text-black " href="/Grocery">
                                <img src="https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100"/>
                                    <p>Grocery</p>
                            </Link>
                        </div>
                        {/* <div className="col-1 m-3">
                            <Link className="nav-link text-black" aria-current="page" href="/Electronic">
                                <img src="https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100"/>
                                <p>Electronic</p>
                            </Link>
                        </div>     */}
                    
                        <div className="col-1 m-3">
                            <Link className=" nav-link text-black" href="/Moblie">
                                <img src="https://rukminim1.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100"/>
                                    <p>Moblie</p>
                            </Link>
                        </div>  
                        <div className=" col-1 m-3">  
                            <Link className="nav-link text-black" href="/Fastion">
                                    <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100"/>
                                        <p>Fastion</p>
                            </Link>
                        </div>
                        <div className=" col-1 m-3">  
                            <Link className="nav-link text-black" href="/Beauty">
                                    <img src="https://rukminim1.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100"/>
                                        <p>Toys&more</p>
                            </Link>
                        </div> 
                        <div className=" col-1 m-3">  
                            <Link className=" nav-link text-black" href="/Home_furniture">
                                    <img src="https://rukminim1.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100"/>
                                        <p>Home&furniture</p>
                            </Link>
                        </div> 
                        <div className=" col-1 m-3">  
                            <Link className="nav-link text-black" href="/Travel">
                                    <img src="https://rukminim1.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100"/>
                                        <p>Travel</p>
                            </Link>
                        </div>     
                    </div>
                </div>
            </div>          

        </>
    )
}
export default Carousel;



