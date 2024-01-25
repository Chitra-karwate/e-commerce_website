import "./style.css";
const Page=()=>{
    return(
        <>
            <div className="container-fluid ">
                <div className="row mx-auto  box ">
                    <div className="row mx-auto box1">
                        <div className="col inside-box d-flex justify-content-center">
                            <img src="Frame1.png"/>
                        </div>
                    </div>
                    <div className="row  mx-auto text"><h2>Order Successfully Placed</h2></div>
                    <div className="row  mx-auto text1"><h3>Track Details on your email-id</h3></div>
                    <div className="row mx-auto text-center"><h3>chitra@gmail.com</h3></div>
                </div>
                <a href="/">
                <div className="row  justify-content-center box2">

                    <button className="btn-dark  button" type="button"><h2>Continue Shopping</h2></button>
               
                </div>
                </a>
            </div>
            
        </>
    
    )

}
export default Page
