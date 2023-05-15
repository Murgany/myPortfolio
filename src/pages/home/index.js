import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">

        {/* helmed | meta data for SEO */}
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* Home page content */}
        <div className="h_bg-image align-items-center">
          <div className="h-100 d-flex align-items-center">
            <div className="align-self-center">
              <div className="intro text">
                <h1 className="who_am_I">{introdata.title}</h1>
                <h2>
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h2>
                <h5>{introdata.description}</h5>
              </div>
            </div>
          </div>
        </div>
            <div className="d-flex justify-content-center">
                <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn ac_btn-home btn me-3">
                      Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn ac_btn-home btn">
                      Say hi
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
            </div>
      </section>
    </HelmetProvider>
  );
};
