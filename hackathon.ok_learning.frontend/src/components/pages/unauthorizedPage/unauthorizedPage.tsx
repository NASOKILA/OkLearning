import React, { FunctionComponent } from "react";
import { Heading3, Text } from "@jsluna/typography";
import { Container } from "@jsluna/grid";
import "./unauthorizedPage.css";

type UnauthorizedPagePropsType = {};

const UnauthorizedPage: FunctionComponent<UnauthorizedPagePropsType> = () => {
  return (
    <Container element="div" className="unauthorizedPage">
      <Heading3>Unauthorized page</Heading3>
      <Text element="span">You are not authorized to see this content.</Text>
    </Container>
  );
};

export default UnauthorizedPage;
