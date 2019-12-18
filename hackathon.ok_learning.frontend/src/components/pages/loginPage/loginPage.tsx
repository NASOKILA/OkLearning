import React, { Component } from "react";
import { Heading3, Text } from "@jsluna/typography";
import { Container } from "@jsluna/grid";
import "./loginPage.css";

type LoginPagePropsType = {};

type LoginPageStateType = {
  firstName: string;
  lastName: string;
  role: String;
  email: string;
  username: string;
  password: string;
};

//props type, stateType
class LoginPage extends Component<LoginPagePropsType, LoginPageStateType> {
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
      <Container element="div" className="loginPage">
        <Heading3>Login page</Heading3>
        <Text>Email : {this.state.email}</Text>
      </Container>
    );
  }
}

export default LoginPage;

/*
  //Functional Component

  type LoginPagePropsType = {
  email: string;
  password: string;
};

//We can have optional child components.
//const Login: FunctionComponent = ({ username, password, children }: LoginCredentials) => {
const LoginPage: FunctionComponent<LoginPagePropsType> = ({
  email,
  password
}) => {
  return (
    <Container className="loginPage">
      <Heading3>Login page</Heading3>
      <Text>Email : {this.state.email}</Text>
    </Container>
  );
};

export default LoginPage;
*/
