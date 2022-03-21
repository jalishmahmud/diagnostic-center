import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import preloader from "../../../images/preloader.gif";
import signInBg from "../../../images/sign-up-bg.jpg";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import "./SignIn.css";
const SignIn = () => {
  const { signInUser, authError, googleSignIn, isLoading } = useAuth();
  const [signInInfo, setSignInInfo] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const getInputFieldValue = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newSignInInfo = { ...signInInfo };
    newSignInInfo[field] = value;
    setSignInInfo(newSignInInfo);
  };
  const handleUserSignIn = (e) => {
    e.preventDefault();
    console.log(authError);
    signInUser(signInInfo.email, signInInfo.password, location, navigate);
  };

  const handleGoogleSignIn = () => {
    googleSignIn(location, navigate);
  };
  return (
    <>
      <Navigation></Navigation>
      <div className="pb-5">
        <Container className="sign-in-wrapper">
          <Row className="mt-5 w-75 sign-in">
            <Col md={6} xs={12} className="sign-in-image">
              <img className="img-fluid" src={signInBg} alt="" />
            </Col>
            <Col md={6} xs={12} className=" p-5  sign-in-field">
              <h2 className="mb-3">Login </h2>
              {isLoading && (
                <img className="preloader" src={preloader} alt="" />
              )}
              <Form className="sign-in-form" onSubmit={handleUserSignIn}>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Control
                    className="input-field"
                    name="email"
                    onBlur={getInputFieldValue}
                    type="email"
                    placeholder="Your email"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Control
                    className="input-field"
                    name="password"
                    onBlur={getInputFieldValue}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Button
                  className="mb-4 custom-sign-up-button"
                  variant="primary"
                  type="submit"
                >
                  Sign In
                </Button>
                {authError && (
                  <Alert className="my-3" variant="danger">
                    {authError}
                  </Alert>
                )}

                <Form.Group
                  className="mb-4 d-flex justify-content-between"
                  controlId="formBasicCheckbox"
                >
                  <Form.Check type="checkbox" label="Remember" />

                  <Link className="switch-register-sign-in" to="/register">
                    New user? Register Here
                  </Link>
                </Form.Group>

                {/* {isLoading && <Spinner animation="border" variant="primary" />} */}
              </Form>
              <div className="my-4">- Or Sign in with -</div>
              <div className="d-flex justify-content-between">
                <Button
                  className="social-sign-in-button google"
                  onClick={handleGoogleSignIn}
                  variant="danger"
                  type="submit"
                >
                  <span>
                    <FontAwesomeIcon icon={faGoogle} />
                  </span>
                  <span>Google</span>
                </Button>
                <Button
                  className="social-sign-in-button facebook"
                  onClick={handleGoogleSignIn}
                  variant="danger"
                  type="submit"
                >
                  <span>
                    <FontAwesomeIcon icon={faFacebook} />
                  </span>
                  <span> Facebook</span>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer></Footer>
    </>
  );
};

export default SignIn;
