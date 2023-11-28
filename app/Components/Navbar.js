import React from 'react'

const Navbar=()=>{
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid px-5">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0 me-5">
                        <li className="nav-item" >
                            <a className="nav-link active fs-5" aria-current="page" href="home" >Home</a>
                        </li>
                    </ul>
                    <div className='col-5'>
                        <form className="d-flex " role="search" >
                            <input className="form-control me-2 fs-5" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success fs-5" type="submit" >Search</button>
                        </form>
                    </div>
    
                </div>
                <div className='ml-auto'>
                    <img src="https://static.vecteezy.com/system/resources/previews/019/787/018/non_2x/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png" alt="" style={{height:"50px",marginRight:"27px"}}/>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;
