import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
import AnimatedCursor from "../hooks/AnimatedCursor";
import "./App.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="row justify-content-center page-ente">
        {/* Custom cudor */}
        <div className="cursor__dot">
          <AnimatedCursor
            innerSize={12}
            outerSize={15}
            color="255, 255 ,255"
            outerAlpha={0.4}
            innerScale={0.7}
            outerScale={2.5}
          />
        </div>
        
        <ScrollToTop>
          <div className="sidebar-layout justify-content-center">
            <Headermain />
          </div>
          <div className="d-fle screen-layout justify-content-center">
            <AppRoutes />
          </div>
        </ScrollToTop>
      </div>
    </Router>
  );
}
