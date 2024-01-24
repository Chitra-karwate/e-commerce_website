import Link from "next/link";
import "./cart.css";

const Cart=()=>{
    return(
        <>
            <div className="container-fluid">
                <div className="row cart-header mx-auto border border-dark">
                    <div className="row cart-box mt-5">
                        <div className="col-7 text-center "><h3>MY CART</h3></div>
                        <div className="col-11 text-center "><p>All the products you added to purchase appears here</p></div>
                    </div>
                </div>
                
                <div className="row cart-row mx-auto mt-5 border border-dark">
                    <div className="row-auto cart-inside-box border">
                       <div class="row cart-inside-box">
                            <div class="col-2 mx-3  border">One of two columns</div>
                            <div class="col-2 border">One of two columns</div>
                            <div class="col-md-4 price-box offset-md-7 border"></div>
                        </div>
                        <div class="row cart-inside-box border">
                            <div class="col-2 mx-3  border">One of two columns</div>
                            <div class="col-2 border">One of two columns</div>
                            <div class="col-md-4 price-box offset-md-7 border"></div>
                        </div>
                        <div class="row cart-inside-box border">
                            <div class="col-2 mx-3  border">One of two columns</div>
                            <div class="col-2 border">One of two columns</div>
                            <div class="col-md-4 price-box offset-md-7 border"></div>
                        </div>
                        <div class="col p-3 offset-md-10 border"></div>
                    </div>
                </div>
                 <Link  href="/Form">
                    <div className="row button-row mb-5 mt-4 justify-content-end">
                        <button className="btn-dark  button" type="button"><h2>Proceed to By</h2></button>
                    </div>
                </Link>
            </div>
        </>
    )
}
export default Cart;
