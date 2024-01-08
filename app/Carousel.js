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











            <div className="container-fluid text-center">
                <div className="row justify-content-center" >
                    <div id="carouselExampleIndicators" className="carousel slide mt-3 mb-3 " data-bs-ride="carousel" data-interval="2000">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b21b5be304d115cd.jpg?q=20" alt="firstimage"  />
                            </div>
                            <div className="carousel-item">
                                <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9f2d8a698cd97710.jpg?q=20"  alt="secondimage" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1575923f761f2f2a.jpg?q=20"  alt="thirdimage"/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>  
                </div> 
            </div>    
        </>
    )
}
export default Carousel;