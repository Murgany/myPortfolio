import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      {/* <Container className="my-5 pt-5 pb-4"> */}

      <Container className="my-sm-3 my-lg-5 pt-5 pt-sm-3 pt-lg-5 pb-5">

        {/* metat dat for SEO */}
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* About me section */}
        <Row className="common-bg px-sm-3 px-md-5 mt-0 mt-sm-5 pb-sm-3 pb-md-5 top">
        <Row className="mt-3 pt-md-3 ">
          <Col lg="5">
            <h1 className="display-4 mb-4 ">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
          <Col
            lg="5"
            className="pb-5 align-items-center justify-content-center"
          >
            <img
              className="profile-img common-img img-fluid"
              src="/img/full-stack-developer.png"
            />
          </Col>
          <Col lg="7" className="d-flex align-items-center pb-5 pt-3">
            <div>
              <p className="text-muted content">{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>

        {/* Services section */}
        {/* <Row className="sec_s common-bg px-3 pt-5 pb-4 bottom"> */}
        <Row className="common-bg px-sm-3 px-md-5 pb-sm-3 pb-md-5 bottom">
        <Row className="mt-3 pt-md-3 ">
          <Col lg="5">
            <h1 className="display-4 mt-5 ">Services</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
          <Col lg="5" className="py-5">
            {/* <h3 className="">Services</h3> */}
            <img src="img/web-development-services.jpeg" className="img-fluid common-img" />
          </Col>
          <Col lg="7" className="">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="text-muted content">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
