import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    let apiBase = (process.env.REACT_APP_API_URL || "").replace(/\/$/, "");
    // During development when running React dev server on localhost:3000,
    // default to the local Django backend at 127.0.0.1:8000 so requests reach the API.
    if (!apiBase && typeof window !== "undefined") {
      const host = window.location.hostname;
      if (host === "localhost" || host === "127.0.0.1") {
        apiBase = "http://127.0.0.1:8000";
      }
    }
    const source = axios.CancelToken.source();

    axios
      .get(`${apiBase}/api/projects/`, { cancelToken: source.token })
      .then((res) => {
        if (!mounted) return;
        const data = res.data || [];
        const mapped = data.map((p) => {
          // Normalize image URL: if image_url is relative, prefix apiBase/static or apiBase
          let img = p.image_url || "img/logo3.png";
          if (img && !/^https?:\/\//i.test(img) && apiBase) {
            // If backend serves media at /media/, image_url may already be '/media/..'
            if (img.startsWith("/")) img = `${apiBase}${img}`;
            else img = `${apiBase}/${img}`;
          }

          return {
            title: p.title,
            description: p.description,
            img,
            tech: p.tech || "",
            link: p.link || "#",
          };
        });
        setProjects(mapped);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        console.warn("Failed to fetch projects from API:", err.message || err);
        // keep fallback dataportfolio
      })
      .finally(() => setLoading(false));

    return () => {
      mounted = false;
      source.cancel("Component unmounted");
    };
  }, []);

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
            {projects.length === 0 ? (
              <div className="my-4 text-center">No projects found. Add projects in the admin dashboard.</div>
            ) : (
              projects.map((data, i) => (
                <div key={i} className="my-4 po_items_home row">
                  <div className="col-sm-4">
                    <div className="po_item">
                      <img
                        src={data.img}
                        alt={data.title || "project"}
                        className="align-self-cente img-fluid"
                      />
                    </div>
                    <p className="content pt-3">
                      <strong>Tech used:</strong>
                    </p>
                    <p className="content">{data.tech}</p>
                  </div>
                  <div className="col-sm-8 po_item">
                    <div className="content ">
                      <h4 className="mb-3">{data.title}</h4>
                      <p className="non-phone-screen text-muted">{data.description}</p>

                      <details className="mobile">
                        <summary>
                          <strong>Project Description</strong>
                        </summary>
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
              ))
            )}
          </Row>
      </Container>
    </HelmetProvider>
  );
};
