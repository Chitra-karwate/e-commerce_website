import Link from "next/link";
const NavbarCompont=()=>{
    return(
        <>
            <div class="container-fluid">
                <nav class="navbar white" data-bs-theme="dark">
                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" />
                    <a href="/Home">Home</a>
                    <div class= "col-6">
                        <form class="d-flex" role="search">
                            <input class="form-control mr-sm-2 bg-white text-black" type="search" placeholder="Search" aria-label="Search"  style={{ Color: 'black' }}/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    <a  href="/AddCart">
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="cart" class="bg-img-none background-image: none;
    background: none; "style={{width:"40px"}} /><b>Cart</b>
                    </a>            
                                        
                </nav>
            </div>    
        </>
        
    )
}
export default NavbarCompont; 