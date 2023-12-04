import Link from "next/link";
const NavbarCompont1=()=>{
    return(
        <>
            
                <div class="container-fluid">
                    <div style={{ backgroundColor: '#e3f2fd' }}>
                        <nav class="navbar border-bottom mb-2" data-bs-theme="dark">
                            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"  />
                            <a class="navbar-brand text-black"href="/">
                                Home
                            </a>
                            <div class= "col-6">
                                <form class="d-flex" role="search">
                                    <input class="form-control mr-sm-2 bg-white text-black" type="search" placeholder="Search" aria-label="Search"  style={{ Color: 'black' }}/>
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                            <Link class="navbar-brand text-black" href="/Card">
                                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="cart" class="bg-img-none background-image: none;
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
