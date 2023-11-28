import Link from "next/link";
import"bootstrap/dist/css/bootstrap.css";
import NavbarCompont from "./NavbarCompont";
import Body from "./Body";
const page=()=>{
  return(
    <>
      <NavbarCompont/>
      <Body/>
    </>
  )
}
export default page;