import React from "react";
import { Col, Row } from "react-bootstrap";
//import { CgCPlusPlus } from "react-icons/cg";
import {
 // DiJavascript1,
  DiReact,
 // DiNodejs,
 // DiMongodb,
  DiPython,
  //DiGit,
  DiJava,
} from "react-icons/di";
import {
  // SiRedis,
  // SiFirebase,
  // SiNextdotjs,
  // SiSolidity,
  // SiPostgresql,
} from "react-icons/si";
//import { TbBrandGolang } from "react-icons/tb";
import { SiC } from "react-icons/si";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
  <SiC />
</Col>
<Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
    </Row>
  );
}

export default Techstack;
