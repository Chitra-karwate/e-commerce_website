import Link from "next/link";
const NavbarCompont2=()=>{
    return(
        <>
                <nav class="navbar white border-bottom  border-top" data-bs-theme="dark">
                    <ul class="nav mx-auto">
                        <li class="nav-item">
                            <a class="nav-link navbar-brand text-black" href="/Grocery">
                                <img src="https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100"/>
                                    <p>Grocery</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navbar-brand text-black" aria-current="page" href="/Electronic">
                                <img src="https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100"/>
                                <p>Electronic</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navbar-brand text-black" href="/Moblie">
                                <img src="https://rukminim1.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100"/>
                                    <p>Moblie</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navbar-brand text-black" href="/Fastion">
                                <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100"/>
                                    <p>Fastion</p>
                            </a>
                        </li>
                        
                    </ul>
                </nav>

                            
                
               

        </>
        
    )
}
export default NavbarCompont2; 
