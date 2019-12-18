import React, { FunctionComponent } from "react";
import { Heading3 } from "@jsluna/typography";
import { Container } from "@jsluna/grid";
import "./teachPage.css";

type TeachPagePropsType = {};

const LoginPage: FunctionComponent<TeachPagePropsType> = () => {
  return (
    <Container element="div" className="teachPage">
      <Heading3>Teach page</Heading3>
      <Container element="div">
        Have a form to upload course content and videos
      </Container>
    </Container>
  );
};

export default LoginPage;
