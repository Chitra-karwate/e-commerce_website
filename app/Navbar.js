import Link from "next/link";
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
            <div className="container-fluid">
                <nav className="navbar border-dark" data-bs-theme="dark">
                    <div className="row">
                        <div className="col-12 col-md-auto">
                            <img src="logo.png" />
                        </div>
                        <div className="col-12 col-md-auto mx-2">
                            <img src="img1.png" />
                        </div>
                        <div className="col-12 col-md-auto ">
                            <div className="row ">
                                <div className="col-2 col-md-auto">
                                    <a className="home" href="/">
                                        Home
                                    </a>
                                </div>
                                <div className="col-2 col-md-auto ">
                                    <img src="Dropdown.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-auto mx-2">
                            <img src="img3.png" />
                        </div>
                        <div className="col-12 col-md-auto mx-2 ">
                            <img src="img4.png" />
                        </div>
                        <div className="col text-black   search-box">
                            <form className="d-flex" role="search">
                                <input className="form-control mr-sm-2 bg-white text-black" type="search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    
                    </div>
                   
                    
                    <Link className="navbar-brand text-primary" href="/Cart">
                        <div className="row ">
                            <div className="col">
                                <img src="cart.svg" />
                            </div>
                            <div className="col">
                                <p>My Cart</p>
                            </div>
                        </div>
                    </Link>
                </nav>
            </div>
        </>
    );
};

export default Navbar;

