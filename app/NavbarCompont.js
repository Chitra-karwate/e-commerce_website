import Link from "next/link";
const NavbarCompont=()=>{
    return(
        <>
            
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFQg-a06HyjCkdZIZc4CGawQocLSEhQPbAg&usqp=CAU" alt="logo" class="img-thumbnail" width="150px" height="80px" />
                <div class="col-1">
                    <div>
                        <img src="https://icon-library.com/images/location-icon-white-png/location-icon-white-png-20.jpg"alt="location"  class="img-thumbnail" width="30px" />                    
                    </div>
                    <div>
                        <a href="/Location">
                            <span>Deliver to</span>
                        </a>
                        <a href="/Location">
                            <span>India</span>
                        </a>
                    </div>    


                    
                </div>    
                <div class= "col-6">
                    <form class="d-flex" role="search">
                        <input class="form-control mr-sm-2 bg-white text-black" type="search" placeholder="Search" aria-label="Search"  style={{ Color: 'black' }}/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>

                    <a  href="/About">About</a>
                    <a  href="/Login">Login</a>
                    <a  href="/AddCart">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1jaiOHWfJECIsxUUtvXBSc2ON-chJtzWhZg&usqp=CAU" alt="cart"  class="img-thumbnail" width="50px"/><b>Cart</b>
                    </a>            
                                      
            </nav>
        </>
        
    )
}
export default NavbarCompont; 