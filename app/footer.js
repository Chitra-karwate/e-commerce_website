import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="container-fluid ">
        <div
          className="row mx-auto ml-5 footer-box">
          <div className="col-lg-3 col-md-6 col-sm-12 mx-auto border border-dark">
            <img className="p-4 logo border border-dark" src="logo1.png" />
            <div className="col-2 mx-auto">
              <img className="text-alien border" src="logo2.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
