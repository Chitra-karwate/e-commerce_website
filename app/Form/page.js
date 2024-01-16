import "./Form.css";
const Form=()=>{
    return(
        <>
            <div className="container-fluid  ">
                <div className="row mx-auto form-header">
                    <div className="row cart-box mt-5">
                        <div className="col-8 text-center"><h3>ADD DELIVERY DETAILS</h3></div>
                        <div className="col-6 text-center"><p>Add the details below</p></div>
                    </div>
                </div>
                
                <div className=" mx-auto cart-body">
                    <div className="row  mx-auto  justify-content-center email-box ">
                        
                            <label><h5>Your Email Address</h5></label>
                        
                        
                            <div>All details of purchase,also tracking details will be send here.</div>
                        
                        <input type="text" className=" col-12"/>
                    </div>
                    
                    <div className="row mx-auto justify-content-center mt-5 email-box">
                         <label><h5>Name of the Receive</h5></label>
                         <div>All details of purchase,also tracking details will be send here.</div>
                         <input type="text" className=" col-12"/>
                        
                    </div>
                    <div className="row mx-auto justify-content-center mt-5 email-box">
                        <label><h5>Contact Number of the Receiver</h5></label>
                        <div>The delivery will be in this Name</div>
                        <input type="text" className=" col-12"/>
                    </div>
                     <div className="row mx-auto justify-content-center  mt-5 delivary-address-box">
                        <label><h5>Delivery Address</h5></label>
                        <div>The delivery will be in this Name</div>
                        <div>Pin Code</div>
                        <input type="text" className="col-12"/>
                        <div className="pt-4">Address(House no,Flat no,Street Area)</div>
                        <input type="text" className=" col-12"/>
                        <div className="pt-4">Town/City</div>
                        <input type="text" className=" col-12"/>
                    </div>
                    <div className="row button-row mt-5 ">
                        <button className="btn-dark button1" type="button"><h3>Complete Purchase</h3></button>
                    </div>         
                        
                </div>
            </div>
        </>
    )
}
export default Form;
