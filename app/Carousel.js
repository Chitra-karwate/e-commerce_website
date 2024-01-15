import Link from "next/link";


const Carousel=()=>{
    return(
        <>
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