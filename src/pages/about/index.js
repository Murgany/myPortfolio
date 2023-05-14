import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  certifications,
  skills,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header mt-5">

        {/* metat dat for SEO */}
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* About me header */}
        <Row className="mt-3 pt-md-3 ">
          <Col lg="8">
            <h1 className="display-4 mb-4 ">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* About me section */}
        <Row className="skills-bg ps-2 pe-2 pt-5 pb-5 top">
          <Col
            lg="5"
            className="pb-5 align-items-center justify-content-center"
          >
            <img
              className="profile-img about-sec-im img-fluid"
              src="/img/full-stack-developer.png"
            />
          </Col>
          <Col lg="7" className="d-flex align-items-center pb-5 pt-3">
            <div>
              <p className="text-muted">{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>

        {/* Skills section */}
        <Row className="skills-bg ps-2 pe-2 bottom">
          <Col lg="5">
            <h3 className="py-5 ">Skills</h3>
            <img src="img/tech-skills.jpeg" className="img-fluid about-sec-img" />
          </Col>
          <Col lg="7" className="pt-5">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>

        {/* Certificaates section */}
        <Row className="sec_s skills-bg ps-2 pe-2 pt-5 pb-5 top">
          <hr className="t_border" />
          <Col lg="5">
            <h3 className="color_sec py-5">Certifications</h3>
            <img src="img/it-certificates.png" className="img-fluid about-sec-img" />
          </Col>
          <Col lg="7" className="pb-4 py-5">
            {certifications.map((data, i) => {
              return (
                <div className="mb-4" key={i}>
                  <h5 className="">{data.certificate}</h5>
                  <h6 className="text-muted">
                    {data.where} |{" "}
                    <a href={data.verify_link} className="link-color">
                      Verify
                    </a>
                  </h6>
                </div>
              );
            })}
          </Col>
        </Row>

        {/* Services section */}
        <Row className="sec_s skills-bg ps-2 pe-2 pt-5 pb-4 mb-5 bottom">
          <Col lg="5">
            <h3 className="py-4">Services</h3>
            <img src="img/web-services.jpg" className="img-fluid about-sec-img" />
          </Col>
          <Col lg="7" className="">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="text-muted">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
