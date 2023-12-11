import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { introdata, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import {
  FaHome,
  FaBriefcase,
  FaUserCircle,
  FaEnvelopeOpen,
} from "react-icons/fa";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    // document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/">
            <img
              src="img/logo3.png"
              className="img-fluid"
              style={{ width: "50px", height: "30px", filter: "grayscale(45%)"}}
            />
          </Link>
          <div className="d-flex align-items-center">
            <Themetoggle />
            <button className="menu__button nav_ac" onClick={handleToggle}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between ">
          <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
            <div className="bg__menu h-100 ">
              <div className="menu__wrapper">
                {/* <div className="p-3"> */}
                  <ul className="the_menu">
                    <li className="menu_item">
                      <Link onClick={handleToggle} to="/" className="my-3">
                        <FaHome style={{ color: "var(--text-color-3)" }} />
                        &emsp;Home
                        </Link>
                    </li>
                    <li className="menu_item">
                      <Link onClick={handleToggle} to="/about" className="my-3">
                        <FaUserCircle style={{ color: "var(--text-color-3)" }} />
                        &emsp;About
                      </Link>
                    </li>
                    <li className="menu_item">
                      <Link onClick={handleToggle} to="/portfolio" className="my-3" >
                        <FaBriefcase style={{ color: "var(--text-color-3)" }} />
                        &emsp;Portfolio
                      </Link>
                    </li>
                    <li className="menu_item">
                      <Link onClick={handleToggle} to="/skills" className="my-3">
                        <FaUserCircle style={{ color: "var(--text-color-3)" }} />
                        &emsp;Skills
                      </Link>
                    </li>
                    <li className="menu_item">
                      <Link onClick={handleToggle} to="/contact" className="my-3" >
                        <FaEnvelopeOpen style={{ color: "var(--text-color-3)"}} />
                        &emsp;Contact
                      </Link>
                    </li>
                  </ul>

                  <div className="menu_footer-2 position-absolute">
                    {/* <div className="the_men position-absolut h_bg-image"></div> */}
                  
                    <div>
                     <a
                        href="img/Resume-Rawy-Murgany.pdf"
                        download="img/Resume-Rawy-Murgany.pdf"
                      >
                        Download Resume
                      </a> <br />
                     <a
                        href="img/Letter of support for Rawy Murgany.pdf"
                        download="img/Letter of support for Rawy Murgany.pdf">
                         Letter of Support
                      </a>
                    </div>
                    <div className="menu_footer d-flex">
                      <a href={socialprofils.github} target="_blank">Github</a><strong>&nbsp;|&emsp;</strong>
                      <a href={socialprofils.linkedin} target="_blank">Linkedin</a>
                    </div>
                  </div>
               
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <div className="br-top"></div>
      <div className="br-bottom"></div> */}
    </>
  );
};

export default Headermain;