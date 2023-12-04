<<<<<<< HEAD
import Navbar from "@/Components/Navbar";
import CarouselComponent from "@/Components/CarouselComponent";
import Card from "@/Components/Card";
const page=()=>{
  return(
    <>      
      <Navbar/>
      <CarouselComponent/>
      <Card/>
=======
import Link from "next/link";
import"bootstrap/dist/css/bootstrap.css";
import NavbarCompont2 from "./Navbarcompont2";
import Body from "./Body";
import Carousel from "./Carousel";


const page=()=>{
  return(
    <>
      <NavbarCompont2/>
      <Carousel/>
      <Body/>
     
      
    
>>>>>>> cdb6c60 (column is done)
    </>
  )
}
export default page;