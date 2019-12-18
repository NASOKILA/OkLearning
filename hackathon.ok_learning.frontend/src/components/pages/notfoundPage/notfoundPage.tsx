import React, { FunctionComponent } from "react";
import { Heading3, Text } from "@jsluna/typography";
import { Container } from "@jsluna/grid";
import "./notfoundPage.css";

type NotFoundPagePropsType = {};

const NotFoundPage: FunctionComponent<NotFoundPagePropsType> = () => {
  return (
    <Container element="div" className="notfoundPage">
      <Heading3>Notfound page</Heading3>
      <Text element="p">404 NOT FOUND</Text>
    </Container>
  );
};

export default NotFoundPage;
