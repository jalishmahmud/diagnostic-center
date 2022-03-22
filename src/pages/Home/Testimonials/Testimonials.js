import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import testimonialAuthor from "../../../images/testimonail-author.png";
import "./Testimonials.css";
const Testimonials = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="testimonial-wrapper">
      <Container>
        <Row className="testimonial">
          <div className="section-title">
            <h2>Testimonials</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <Col>
            <Slider {...settings}>
              <div className="single-testimonial-wrapper">
                <div className="single-testimonial">
                  <p>
                    Melon supports clients engaged in a variety of global
                    capital market activities, bridging importers and exporters,
                    businesses, and financiers.
                  </p>
                  <div className="meta-data">
                    <img src={testimonialAuthor} alt="" />
                    <div className="meta-text">
                      <h5>Richael Geere</h5>
                      <small>Business Man</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-testimonial-wrapper">
                <div className="single-testimonial">
                  <p>
                    Melon supports clients engaged in a variety of global
                    capital market activities, bridging importers and exporters,
                    businesses, and financiers.
                  </p>
                  <div className="meta-data">
                    <img src={testimonialAuthor} alt="" />
                    <div className="meta-text">
                      <h5>Richael Geere</h5>
                      <small>Business Man</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-testimonial-wrapper">
                <div className="single-testimonial">
                  <p>
                    Melon supports clients engaged in a variety of global
                    capital market activities, bridging importers and exporters,
                    businesses, and financiers.
                  </p>
                  <div className="meta-data">
                    <img src={testimonialAuthor} alt="" />
                    <div className="meta-text">
                      <h5>Richael Geere</h5>
                      <small>Business Man</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-testimonial-wrapper">
                <div className="single-testimonial">
                  <p>
                    Melon supports clients engaged in a variety of global
                    capital market activities, bridging importers and exporters,
                    businesses, and financiers.
                  </p>
                  <div className="meta-data">
                    <img src={testimonialAuthor} alt="" />
                    <div className="meta-text">
                      <h5>Richael Geere</h5>
                      <small>Business Man</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-testimonial-wrapper">
                <div className="single-testimonial">
                  <p>
                    Melon supports clients engaged in a variety of global
                    capital market activities, bridging importers and exporters,
                    businesses, and financiers.
                  </p>
                  <div className="meta-data">
                    <img src={testimonialAuthor} alt="" />
                    <div className="meta-text">
                      <h5>Richael Geere</h5>
                      <small>Business Man</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-testimonial-wrapper">
                <div className="single-testimonial">
                  <p>
                    Melon supports clients engaged in a variety of global
                    capital market activities, bridging importers and exporters,
                    businesses, and financiers.
                  </p>
                  <div className="meta-data">
                    <img src={testimonialAuthor} alt="" />
                    <div className="meta-text">
                      <h5>Richael Geere</h5>
                      <small>Business Man</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-testimonial-wrapper">
                <div className="single-testimonial">
                  <p>
                    Melon supports clients engaged in a variety of global
                    capital market activities, bridging importers and exporters,
                    businesses, and financiers.
                  </p>
                  <div className="meta-data">
                    <img src={testimonialAuthor} alt="" />
                    <div className="meta-text">
                      <h5>Richael Geere</h5>
                      <small>Business Man</small>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
