import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  meta,
  certifications,
  skills,
} from "../../content_option";

export const Skills = () => {
  return (
    <HelmetProvider>
      <Container className="my-sm-3 my-lg-5 pt-5 pt-sm-3 pt-lg-5 pb-4">

        {/* metat dat for SEO */}
        <Helmet>
          <meta charSet="utf-8" />
          <title> Skills | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* Skills section */}
        
        <Row className="common-bg px-sm-3 px-md-5 mt-0 mt-sm-5 pb-sm-3 pb-md-5 top">
        <Row className="my-2 my-sm-3 pt-md-5">
          <Col lg="4">
            <h1 className="display-4 mb-4 ">Skills</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
          <Col lg="5">
            <img src="img/skills.jpeg" className="img-fluid common-img" />
            // <img src="img/full-stack-web-developer.jpeg" className="img-fluid mb-0 pb-0 mt-5 common-img" />
          </Col>
          <Col lg="7" className="pt- mt-">
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
          <div className="mt-5 row"></div>
        </Row>

        {/* Certificates section */}
        <Row className="common-bg px-sm-3 px-md-5 pb-sm-3 pb-md-5 py-sm-3 py-md-5 bottom">

        <Row className="mt-5 pt-md- ">
          <Col lg="5">
            <h1 className="display-4 mb-4 ">Certificates</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
          <Col lg="5">
            <img src="img/certificates-1.jpeg" className="img-fluid common-img" />
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
      </Container>
    </HelmetProvider>
  );
};
