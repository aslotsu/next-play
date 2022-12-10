import styled from "styled-components";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
    return <>
        <NavBar>
            <div className="wrapper">
                <HamburgerMenu/>
                <h1>Stella's Exclusive Designs</h1>
            </div>
        </NavBar>
    </>
}

const NavBar = styled.nav`
  background-color: #F9A03F;
  height: 20vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  & .wrapper {
    display: flex;
    height: 100%;
    //border: 2px solid white;
    justify-content: space-between;
    align-items: center;
    width: 25%;
    padding: 20px;
  }
  
   & h1 {
     font-size: 2rem;
   }
  
`
export default Navbar