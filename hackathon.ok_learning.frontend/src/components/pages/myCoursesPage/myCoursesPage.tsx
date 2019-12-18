import React, { Component } from "react";
import { Heading3, Text } from "@jsluna/typography";
import { Container } from "@jsluna/grid";
import "./myCoursesPage.css";

type MyCoursesPagePropsType = {};

type MyCoursesPageStateType = {
  myCourses: [];
  mySubscribers: [];
};

// props type, stateType
class MyCoursesPage extends Component<
  MyCoursesPagePropsType,
  MyCoursesPageStateType
> {
  constructor(props) {
    super(props);

    this.state = {
      myCourses: [],
      mySubscribers: []
    };
  }

  componentWillMount() {}

  componentDidMount() {
    this.setState({ mySubscribers: [] });
  }

  render() {
    return (
      <Container className="myCoursesPage">
        <Heading3>My courses page</Heading3>
        <Text>My Courses : {this.state.myCourses}</Text>
        <Text>My subscribers : {this.state.mySubscribers}</Text>
      </Container>
    );
  }
}

export default MyCoursesPage;
