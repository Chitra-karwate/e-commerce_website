
import Link from "next/link";
import"bootstrap/dist/css/bootstrap.css";
import Carousel from "./Carousel";
import Footer from "./footer";
import ElectronicsPage from "./Electronics";
import MenClothingPage from "./MenClothing";
import JeweleryPage from "./Jewelery";
import WomenClothPage from "./WomenCloth";
const Page=()=>{
  
  return(
    <>

      <Carousel/>
      <MenClothingPage/>
      <WomenClothPage/>
      <JeweleryPage/>
      <ElectronicsPage/>

      <Footer/>  
  
    </>
  );
};

export default Page;
