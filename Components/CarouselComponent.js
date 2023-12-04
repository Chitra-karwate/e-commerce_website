import React from 'react'

function CarouselComponent() {
  return (
    <div className='container-fluid px-5' >
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1575923f761f2f2a.jpg?q=20" className="d-block w-100" alt="..." height={350}/>
        </div>
        <div className="carousel-item">
          <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9f2d8a698cd97710.jpg?q=20" className="d-block w-100" alt="..." height={350}/>
        </div>
        <div className="carousel-item">
          <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9f2d8a698cd97710.jpg?q=20" className="d-block w-100" alt="..." height={350}/>
        </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default CarouselComponent;