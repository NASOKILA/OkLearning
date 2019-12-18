import React, { Component } from "react";
import { Heading3, Text } from "@jsluna/typography";
import { Container } from "@jsluna/grid";
import "./mainPage.css";

type MainPagePropsType = {};

type MainPageStateType = {
  courses: [];
};

class MainPage extends Component<MainPagePropsType, MainPageStateType> {
  constructor(props) {
    super(props);

    this.state = {
      courses: []
    };
  }

  // Before the component mounts, we initialise our state
  componentWillMount() {}

  // After the component did mount, we set the state each second.
  componentDidMount() {
    this.setState({ courses: [] });
  }

  render() {
    return (
      <Container element="div" className="mainPage">
        <Heading3 element="">Main page</Heading3>
        <Text element="p">List of courses</Text>
      </Container>
    );
  }
}

export default MainPage;
