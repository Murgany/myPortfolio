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
              src={introdata.logotext}
              className="img-fluid"
              style={{ width: "40px", height: "22px" }}
            />
          </Link>
          <div className="d-flex align-items-center">
            <Themetoggle />
            <button className="menu__button nav_ac" onClick={handleToggle}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
            <div className="bg__menu h-100">
              <div className="menu__wrapper">
                <div className="p-3">
                  <ul className="the_menu">
                    <li className="menu_item">
                      <Link onClick={handleToggle} to="/" className="my-3">
                        <FaHome style={{ color: "var(--text-color-3)" }} />
                        &emsp;Home
                        </Link>
                    </li>
                    <li className="menu_item">
                      <Link onClick={handleToggle} to="/portfolio" className="my-3" >
                        <FaBriefcase style={{ color: "var(--text-color-3)" }} />
                        &emsp;Portfolio
                      </Link>
                    </li>
                    <li className="menu_item">
                      <Link onClick={handleToggle} to="/about" className="my-3">
                        <FaUserCircle style={{ color: "var(--text-color-3)" }} />
                        &emsp;About
                      </Link>
                    </li>
                    <li className="menu_item">
                      <Link onClick={handleToggle} to="/contact" className="my-3" >
                        <FaEnvelopeOpen style={{ color: "var(--text-color-3)"}} />
                        &emsp;Contact
                      </Link>
                    </li>
                    <li className="menu_item-2">
                      <a
                        className="mt-5"
                        href="img/Resume-Rawy-Murgany.pdf"
                        download="img/Resume-Rawy-Murgany.pdf"
                      >
                        Download Resume
                      </a>
                    </li>
                    <li className="menu_item-2">
                      <a className=""
                        href="img/Letter of support for Rawy Murgany.pdf"
                        download="img/Letter of support for Rawy Murgany.pdf">
                         Letter of Support
                      </a>
                    </li>
                  </ul>
                  <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
                    <div className="d-flex">
                      <a href={socialprofils.github} target="_blank">Github</a>
                      <a href={socialprofils.linkedin} target="_blank">Linkedin</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
    </>
  );
};

export default Headermain;
