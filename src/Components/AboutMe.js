import React from "react";

import "../sass/App.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import proud_coder from "../Photos/proud_coder.svg";

const AboutMe = ({ t }) => {
    return (
        <div
            className="AboutMe my-md-5 py-md-5 my-2 py-2 d-flex align-items-md-center"
            style={{ height: "80vh" }}
        >
            <Container className="py-md-5 my-md-5 my-2 py-2">
                <Row
                    xs={1}
                    md={1}
                    lg={2}
                    className="justify-content-xs-center py-md-5 my-md-5 my-2 py-2"
                >
                    <Col xs="auto">
                        <Image
                            variant="center"
                            src={proud_coder}
                            height="100%"
                            width="100%"
                            className="aboutmeImg img"
                        />
                    </Col>
                    <Col className="align-self-center px-3" xs="auto">
                        <h1>{t("aboutme")} Marija!</h1>

                        <h3>{t("aboutmetext")}</h3>
                        <Container
                            className="px-0 py-2 
                        d-flex flex-column justify-content-md-start align-items-md-start justify-content-center align-items-center"
                        >
                            <Row>
                                <Col className="icon align-items-center justify-content-center">
                                    <a
                                        href="https://github.com/marijahavaic"
                                        rel="noreferrer noopener"
                                        target="_blank"
                                    >
                                        <FontAwesomeIcon
                                            icon={faGithub}
                                            className="icon"
                                            style={{
                                                fontSize: "3.75rem",
                                                paddingRight: "2rem",
                                            }}
                                        />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/marija-havaic/"
                                        rel="noreferrer noopener"
                                        target="_blank"
                                    >
                                        <FontAwesomeIcon
                                            icon={faLinkedin}
                                            className="icon"
                                            style={{ fontSize: "4rem" }}
                                        />
                                    </a>
                                </Col>
                            </Row>
                            <Row className="mb-5 pb-5">
                                <Col>
                                    <Button
                                        variant="danger"
                                        type="submit"
                                        className="mt-3 p-3 btn"
                                    >
                                        <a
                                            href="https://www.dropbox.com/s/uh1i41nwpui1g1w/Marija%20Havaic%20Resume.pdf?dl=0"
                                            rel="noreferrer noopener"
                                            target="_blank"
                                            className="resumeLink"
                                        >
                                            {t("download")}
                                        </a>
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutMe;
