import React, { Component } from "react";
import { Heading1, Text } from "@jsluna/typography";
import { Container } from "@jsluna/grid";
import { Form, FormGroup, TextInputField } from "@jsluna/form";
import { FilledButton, LinkButton, OutlinedButton } from "@jsluna/button";
import Spinner from "../../spinner/spinner";
import "./loginPage.css";

type LoginPagePropType = {
  history: any;
  children: any;
};

type LoginPageStateType = {
  form: {
    email: string;
    password: string;
  };
  defaultForm: {
    email: "";
    password: "";
  };
  emailErrorMessagesShow: Boolean;
  passwordErrorMessagesShow: Boolean;
  spinnerShowing: Boolean;
};

type LoginCredentialsType = {
  email: string;
  password: string;
};

//props type, stateType
class LoginPage extends Component<LoginPagePropType, LoginPageStateType> {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        email: "",
        password: ""
      },
      defaultForm: {
        email: "",
        password: ""
      },
      emailErrorMessagesShow: false,
      passwordErrorMessagesShow: false,
      spinnerShowing: false
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  login = (e: any): void => {
    e.preventDefault();

    let loginCredentials: LoginCredentialsType = {
      email: this.state.form.email,
      password: this.state.form.password
    };

    let newState = { ...this.state };
    newState.spinnerShowing = true;
    newState.form.password = "";
    newState.form.email = "";
    this.setState(newState);

    console.log(loginCredentials);
    //TO DO: Call API and Redirect to the main page
    setTimeout(() => {
      this.props.history.push("/main");
    }, 1000);
  };

  emailOnChangeHandler = (e: any): void => {
    //call API and check if email is not been used

    let newForm = { ...this.state.form };
    newForm.email = e.target.value;
    this.setState({ form: newForm });
  };

  passwordOnChangeHandler = (e: any): void => {
    //Check if password is valid

    let newForm = { ...this.state.form };
    newForm.password = e.target.value;
    this.setState({ form: newForm });
  };

  redirectToRegisterPage = (): void => {
    this.props.history.push("/register");
  };

  redirectToForgotPasswordPage = (): void => {
    this.props.history.push("/forgotpassword");
  };

  signInWithGoogle = (): void => {
    alert("Sign in with Google");
  };

  render() {
    return (
      <Container element="div" className="loginPage">
        <Container element="div" className="loginPageHeadings">
          <img
            className="loginPageImage"
            src="oklearninglogo.png"
            alt="Smiley face"
            width="200"
          />
          <Container element="div" className="loginPageHeader">
            <Heading1 className="loginPageHeaderText">Login</Heading1>
          </Container>
        </Container>

        <Form
          name="loginPageForm"
          onSubmit={e => this.login(e)}
          className="loginPageForm"
        >
          <FormGroup
            name="form-group-1"
            label="Email"
            error={
              this.state.emailErrorMessagesShow && (
                <span>Please enter a valid email</span>
              )
            }
          >
            <TextInputField
              name="emailInputField"
              onChange={this.emailOnChangeHandler}
              value={this.state.form.email}
              placeholder="Email"
            />
          </FormGroup>
          <FormGroup
            name="form-group-2"
            label="Password"
            error={
              this.state.passwordErrorMessagesShow && (
                <span>Please enter a valid password</span>
              )
            }
          >
            <TextInputField
              name="passwordInputField"
              onChange={this.passwordOnChangeHandler}
              value={this.state.form.password}
              placeholder="Password"
            />
          </FormGroup>
          <FormGroup>
            {JSON.stringify(this.state.form) !==
            JSON.stringify(this.state.defaultForm) ? (
              <FilledButton name="loginBtn" type="submit" fullWidth>
                Login
              </FilledButton>
            ) : (
              <FilledButton disabled name="loginBtn" type="submit" fullWidth>
                Login
              </FilledButton>
            )}
          </FormGroup>
        </Form>
        <Container element="div" className="loginPageBottomLinks">
          <LinkButton bare onClick={this.redirectToForgotPasswordPage}>
            Forgot password ?
          </LinkButton>
          <Text element="br"></Text>

          <img
            onClick={this.signInWithGoogle}
            className="loginPageGoogleLogo"
            src="googlelogo.png"
            alt="Smiley face"
            width="25"
          />
          <LinkButton bare onClick={this.signInWithGoogle}>
            Sign in with Google
          </LinkButton>
          <Text element="br"></Text>
          <Text element="br"></Text>
          <Text element="b">Or</Text>
          <Text element="hr"></Text>
          <OutlinedButton
            name="createAnAccountBtn"
            type="button"
            onClick={this.redirectToRegisterPage}
          >
            Create an account
          </OutlinedButton>
        </Container>
        <Spinner spinnerShowing={this.state.spinnerShowing} />
      </Container>
    );
  }
}

export default LoginPage;
