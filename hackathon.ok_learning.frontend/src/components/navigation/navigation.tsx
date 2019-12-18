import React, { FunctionComponent } from "react";
import { Heading3, Text } from "@jsluna/typography";
import { Container } from "@jsluna/grid";
import { Link } from "react-router-dom";
import "./navigation.css";

type NavigationProps = {};

const Navigation: FunctionComponent = (props: NavigationProps) => {
  return (
    <Container element="div" className="navigation">
      <Heading3>Navigation</Heading3>
      <Text element="span" className="navlink">
        <Link to="/login">Login</Link>
      </Text>
      <Text element="span" className="navlink">
        <Link to="/register">Register</Link>
      </Text>
      <Text element="span" className="navlink">
        <Link to="/main">Main</Link>
      </Text>
      <Text element="span" className="navlink">
        <Link to="/mycourses">My Courses</Link>
      </Text>
      <Text element="span" className="navlink">
        <Link to="/teach">Teach</Link>
      </Text>
      <Text element="span" className="navlink">
        <Link to="/unauthorized">Unauthorized</Link>
      </Text>
      <Text element="span" className="navlink">
        <Link to="/notfound">Not Found</Link>
      </Text>
    </Container>
  );
};

export default Navigation;
