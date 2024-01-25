import Link from "next/link";

import "./carousle.css";
const Carousel=()=>{
    return(
        <>
            <div className="container-fluid text-center">
                <div className="row justify-content-center " >
                    <div id="carouselExampleIndicators" className="mt-3 mb-3 " data-bs-ride="carousel" data-interval="2000">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row mx-auto  box2   rounded-3 text-center " >
                                      
                                    <div className=" row mx-auto  image1 rounded-3 ">
                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                      
                                        <div className="col-6 mx-2 px-5 box3 ">
                                           
                                            <div className="box7 my-5 ">
                                                <div className="col-2 box4 ">
                                                    Woman Styling
                                                </div>
                                                <div className="col-2  box5  ">
                                                    Timeless Comfort, Modern Edge
                                                </div>
                                                <div className="col-3 mx-2 box6  text-white ">
                                                    Explore
                                                </div>   
                                            </div>      
                                        </div>
                                        <div className="col-2 image2">
                                            <img className=""src="women.png"/>
                                        </div>                           
                                    </div>    
                                </div>
                            </div>
                            {/* <div className="carousel-item">
                                <img className="rounded-3" src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9f2d8a698cd97710.jpg?q=20"  alt="secondimage" />
                            </div>
                            <div className="carousel-item">
                                <img  className="rounded-3"src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1575923f761f2f2a.jpg?q=20"  alt="thirdimage"/>
                            </div> */}
                        </div>
                       
                    </div>  
                </div> 
            </div>    
        </>
    )
}
export default Carousel;

