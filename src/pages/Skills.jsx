import React from "react";

import { web_skills, design_skills } from "../data/skillsDetails";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import programming from "../photos/programming.svg";
import add_color from "../photos/add_color.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const Skills = () => {
    const { t } = useTranslation();
    return (
        <div className="Skills">
            <Container className="justify-content-center align-items-center text-center my-md-3 py-md-3 my-xs-1 py-xs-1">
                <h1>{t("skills")}</h1>
                <Row
                    xs={1}
                    md={2}
                    className="pt-3 align-items-center justify-content-center"
                >
                    <Col
                        className="justify-content-center align-items-center"
                        xs={{ order: "last" }}
                        md={{ order: "first" }}
                    >
                        <Container>
                            <h2 className="pb-3 mb-3 red">Programming</h2>
                            <Row
                                xs={1}
                                md={3}
                                lg={4}
                                className="justify-content-center"
                            >
                                {web_skills.map((skill, i) => (
                                    <Col key={i} className="skills_icon m-2">
                                        <FontAwesomeIcon
                                            icon={skill.icon}
                                            style={{
                                                fontSize: "3.5rem",
                                            }}
                                        />
                                        <p>{skill.name}</p>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </Col>
                    <Col
                        className="justify-content-center align-items-center"
                        xs={{ order: "first" }}
                        md={{ order: "last" }}
                    >
                        <Image
                            variant="center"
                            src={programming}
                            height="100%"
                            width="100%"
                            className="aboutmeImg img"
                            alt=""
                        />
                    </Col>
                </Row>
                <Row xs={1} md={2} className="align-items-center ">
                    <Col className="justify-content-center align-self-center">
                        <Image
                            variant="center"
                            src={add_color}
                            height="100%"
                            width="100%"
                            className="aboutmeImg img"
                            alt=""
                        />
                    </Col>
                    <Col className="align-self-center">
                        <Container>
                            <h2 className="mb-4 red">{t("designSkills")}</h2>
                            <Row
                                xs={1}
                                md={3}
                                lg={4}
                                className="justify-content-center"
                            >
                                {design_skills.map((skill, i) => (
                                    <Col key={i} className="skills_icon m-2">
                                        <FontAwesomeIcon
                                            icon={skill.icon}
                                            style={{
                                                fontSize: "3.5rem",
                                            }}
                                        />
                                        <p>{skill.name}</p>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Skills;
