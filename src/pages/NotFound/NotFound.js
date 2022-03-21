import React from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const NotFound = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Container>
        <Row className="d-flex justify-content-center p-5 my-5">
          <h3>Opps! 404 not found </h3>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default NotFound;
