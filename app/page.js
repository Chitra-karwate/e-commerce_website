
import Link from "next/link";
import"bootstrap/dist/css/bootstrap.css";
import Carousel from "./Carousel";
import MenClothingPage from "./MenClothing";
import WomenClothPage from "./WomenCloth";
import JeweleryPage from "./Jewelery";
import ElectronicsPage from "./Electronics";
const Page=()=>{
  
  return(
    <>
      <Carousel/>  
      <MenClothingPage/>
      <WomenClothPage/>
      <JeweleryPage/>
      <ElectronicsPage/>
    </>
  );
};

export default Page;
