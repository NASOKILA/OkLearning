import React, { Component } from "react";
import { Heading3, Text } from "@jsluna/typography";
import { Container } from "@jsluna/grid";
import "./registerPage.css";

type RegisterPagePropsType = {};

type RegisterPageStateType = {
  firstName: string;
  lastName: string;
  role: String;
  email: string;
  username: string;
  password: string;
};

// props type, stateType
class RegisterPage extends Component<
  RegisterPagePropsType,
  RegisterPageStateType
> {
  constructor(props) {
    super(props);

    this.state = {
      email: "example@gmail.com",
      firstName: "",
      lastName: "",
      password: "",
      role: "",
      username: ""
    };
  }

  componentWillMount() {}

  componentDidMount() {
    this.setState({ email: "atanass.kambitovv@gmail.com" });
  }

  render() {
    return (
      <Container element="div" className="registerPage">
        <Heading3>Register page</Heading3>
        <Text>Email : {this.state.email}</Text>
      </Container>
    );
  }
}

export default RegisterPage;
