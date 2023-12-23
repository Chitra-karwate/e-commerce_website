import Link from "next/link";
const NavbarCompont1=()=>{
    return(
        <>
            
                <div className="container-fluid">
                    <div style={{ backgroundColor:"white "}}>
                        <nav className="navbar mb-2 " data-bs-theme="dark">
                            <a className="navbar-brand text-black"href="/">
                                Home
                            </a>
                            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"  />
                            <div className= "col-6">
                                <form className="d-flex" role="search">
                                    <input className="form-control mr-sm-2 text-black  bg-white" type="search" placeholder="Search for Products,Brands and More" aria-label="Search"  style={{ Color: 'black' }}/>
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                            <Link className="navbar-brand" href="/Card">
                                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="cart" className="bg-img-none background-image: none;
            background: none; "style={{width:"40px"}} />
                                <b>Cart</b>
                            </Link>            
                                                
                        </nav>
                    </div>    
                </div>
                   
        </>
        
    )
}
export default NavbarCompont1; 
