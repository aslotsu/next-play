import styled from "styled-components";
import {useState} from "react";

const HamburgerMenu = () => {
    const [active, setActive] = useState(false)
    return <>
        <Menu >
            <div className="row cf">
                <div className="three col">
                    <div id="hamburger-6" className={active ? "hamburger is-active": "hamburger"} onClick={()=> setActive(prevState => !prevState)}>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>
            </div>

        </Menu>
    </>
}

const Menu = styled.div`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }

  a {
    text-decoration: none;
  }

  p, li, a {
    font-size: 14px;
  }





  .six {
    width: 49.2%;
  }


  /* COLUMNS */

  .col {
    display: block;
    float: left;
    margin: 1% 0 1% 1.6%;
  }

  .col:first-of-type {
    margin-left: 0;
  }

  .container {
    width: 100%;
    max-width: 940px;
    margin: 0 auto;
    position: relative;
    text-align: center;
  }

  /* CLEARFIX */

  .cf:before,
  .cf:after {
    content: " ";
    display: table;
  }

  .cf:after {
    clear: both;
  }

  .cf {
    *zoom: 1;
  }


  .row .three {
    padding: 80px 30px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    color: #ecf0f1;
    text-align: center;
  }

  .hamburger .line {
    width: 50px;
    height: 5px;
    background-color: #ecf0f1;
    display: block;
    margin: 8px auto;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .hamburger:hover {
    cursor: pointer;
  }

  #hamburger-6.is-active {
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    -webkit-transition-delay: 0.6s;
    -o-transition-delay: 0.6s;
    transition-delay: 0.6s;
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  #hamburger-6.is-active .line:nth-child(2) {
    width: 0;
  }

  #hamburger-6.is-active .line:nth-child(1),
  #hamburger-6.is-active .line:nth-child(3) {
    -webkit-transition-delay: 0.3s;
    -o-transition-delay: 0.3s;
    transition-delay: 0.3s;
  }

  #hamburger-6.is-active .line:nth-child(1) {
    -ms-transform: translateY(13px);
    transform: translateY(13px);
  }

  #hamburger-6.is-active .line:nth-child(3) {
    -ms-transform: translateY(-13px) rotate(90deg);
    transform: translateY(-13px) rotate(90deg);
  }


`
export default HamburgerMenu