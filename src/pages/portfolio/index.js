import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="my-5 pt-5 mb-">
        {/* Meta data for SEO */}
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        {/* Portfolio header */}
        <Row className="mb-3 mt-3 pt-md-3">
          <Col lg="4">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        {/* Portfolio content */}
        <Row className="justify-content-center">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="my-4 po_items_home row">
                <div className="col-sm-4">
                  <div className="po_item">
                  <img
                    src={data.img}
                    alt=""
                    className="align-self-cente img-fluid"
                  />
                  </div>
                  <p className="content pt-3"><strong>Tech used:</strong></p>
                  <p className="content">{data.tech}</p>
                </div>
                <div className="col-sm-8 po_item">
                  <div className="content ">
                    <h4 className="mb-3">{data.title}</h4>
                    <p className="non-phone-screen text-muted">{data.desctiption}</p>
                    <details className="mobile">
                      <summary><strong>Project Description</strong></summary>
                    <p className="text-muted">{data.description}</p>
                    </details>

                    <div className="justify-content-center mt-5">
                      <Link to={data.link} className="text_2" target="_blank">
                        <div id="button_p" className="ac_btn btn me-3">
                          view project
                          <div className="ring one"></div>
                          <div className="ring two"></div>
                          <div className="ring three"></div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Row>
      </Container>
    </HelmetProvider>
  );
};
