import React, { Component } from "react";
import { Heading1 } from "@jsluna/typography";
import { Container } from "@jsluna/grid";
import { Form, FormGroup, TextInputField, Select } from "@jsluna/form";
import { FilledButton } from "@jsluna/button";
import Spinner from "../../spinner/spinner";
import "./registerPage.css";

type RegisterPagePropsType = {
  history: any;
  children: any;
};

type RegisterPageStateType = {
  form: {
    firstName: string;
    lastName: string;
    role: String;
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
  };
  defaultForm: {
    firstName: string;
    lastName: string;
    role: String;
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
  };
  errorMessages: {
    userNameErrorMessagesShow: Boolean;
    firstNameErrorMessagesShow: Boolean;
    lastNameErrorMessagesShow: Boolean;
    roleErrorMessagesShow: Boolean;
    emailErrorMessagesShow: Boolean;
    passwordErrorMessagesShow: Boolean;
    confirmPasswordErrorMessagesShow: Boolean;
  };
  spinnerShowing: Boolean;
};

type RegisterCredentialsType = {
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
      form: {
        email: "example@gmail.com",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
        role: "",
        username: ""
      },
      defaultForm: {
        email: "example@gmail.com",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
        role: "",
        username: ""
      },
      errorMessages: {
        userNameErrorMessagesShow: false,
        firstNameErrorMessagesShow: false,
        lastNameErrorMessagesShow: false,
        roleErrorMessagesShow: false,
        emailErrorMessagesShow: false,
        passwordErrorMessagesShow: false,
        confirmPasswordErrorMessagesShow: false
      },
      spinnerShowing: false
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  register = (e: any): void => {
    e.preventDefault();

    let registerCredentials: RegisterCredentialsType = {
      email: this.state.form.email,
      password: this.state.form.password,
      firstName: this.state.form.firstName,
      lastName: this.state.form.lastName,
      role: this.state.form.role,
      username: this.state.form.username
    };

    let newState = { ...this.state };
    newState.form.password = "";
    newState.form.email = "";
    newState.form.username = "";
    newState.form.firstName = "";
    newState.form.lastName = "";
    newState.form.role = "";

    newState.spinnerShowing = true;
    this.setState(newState);

    console.log(registerCredentials);
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

  usernameOnChangeHandler = (e: any): void => {
    //call API and check if username is not been used

    let newForm = { ...this.state.form };
    newForm.username = e.target.value;
    this.setState({ form: newForm });
  };

  firstnameOnChangeHandler = (e: any): void => {
    let newForm = { ...this.state.form };
    newForm.firstName = e.target.value;
    this.setState({ form: newForm });
  };

  lastnameOnChangeHandler = (e: any): void => {
    let newForm = { ...this.state.form };
    newForm.lastName = e.target.value;
    this.setState({ form: newForm });
  };

  roleOnChangeHandler = (e: any): void => {
    let newForm = { ...this.state.form };
    newForm.role = e.target.value;
    this.setState({ form: newForm });
  };

  passwordOnChangeHandler = (e: any): void => {
    //Check if password is valid
    //Check if passwords match

    let newState = { ...this.state };
    newState.form.password = e.target.value;

    if (this.state.form.password !== this.state.form.confirmPassword) {
      newState.errorMessages.confirmPasswordErrorMessagesShow = true;
    } else {
      newState.errorMessages.confirmPasswordErrorMessagesShow = false;
    }
    this.setState(newState);
  };

  confirmPasswordOnChangeHandler = (e: any): void => {
    //Check if passwords match

    let newState = { ...this.state };
    newState.form.confirmPassword = e.target.value;

    if (this.state.form.password !== this.state.form.confirmPassword) {
      newState.errorMessages.confirmPasswordErrorMessagesShow = true;
    } else {
      newState.errorMessages.confirmPasswordErrorMessagesShow = false;
    }
    this.setState(newState);
  };
  render() {
    return (
      <Container element="div" className="registerPage">
        <Container element="div" className="registerPageHeadings">
          <img
            className="registerPageImage"
            src="oklearninglogo.png"
            alt="Smiley face"
            width="200"
          />
          <Container element="div" className="registerPageHeader">
            <Heading1 className="registerPageHeaderText">Register</Heading1>
          </Container>
        </Container>

        <Form
          name="registerPageForm"
          onSubmit={e => this.register(e)}
          className="registerPageForm"
        >
          <FormGroup
            name="form-group-1"
            label="Username"
            error={
              this.state.errorMessages.emailErrorMessagesShow && (
                <span>Please enter a valid username</span>
              )
            }
          >
            <TextInputField
              name="usernameInputField"
              onChange={this.usernameOnChangeHandler}
              value={this.state.form.username}
              placeholder="Username"
            />
          </FormGroup>

          <FormGroup
            name="form-group-2"
            label="First name"
            error={
              this.state.errorMessages.firstNameErrorMessagesShow && (
                <span>Please enter a valid first name</span>
              )
            }
          >
            <TextInputField
              name="firstNameInputField"
              onChange={this.firstnameOnChangeHandler}
              value={this.state.form.firstName}
              placeholder="First name"
            />
          </FormGroup>

          <FormGroup
            name="form-group-3"
            label="Last name"
            error={
              this.state.errorMessages.lastNameErrorMessagesShow && (
                <span>Please enter a valid last name</span>
              )
            }
          >
            <TextInputField
              name="lastNameInputField"
              onChange={this.lastnameOnChangeHandler}
              value={this.state.form.lastName}
              placeholder="Last name"
            />
          </FormGroup>

          <FormGroup
            name="form-group-4"
            label="Role"
            error={
              this.state.errorMessages.roleErrorMessagesShow && (
                <span>Please enter a valid role</span>
              )
            }
          >
            <Select
              className="role-dropdown"
              name="select-reason"
              required
              options={[
                { label: "Software Engineer", value: "Software Engineer" },
                { label: "Cloud Engineer", value: "Cloud Engineer" },
                { label: "Scrum Master", value: "Scrum Master" },
                { label: "Warehouse Picker", value: "Warehouse Picker" },
                { label: "Store Cashier", value: "Store Cashier" }
              ]}
              onChange={this.roleOnChangeHandler}
            />
          </FormGroup>

          <FormGroup
            name="form-group-5"
            label="Email"
            error={
              this.state.errorMessages.emailErrorMessagesShow && (
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
            name="form-group-6"
            label="Password"
            error={
              this.state.errorMessages.passwordErrorMessagesShow && (
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

          <FormGroup
            name="form-group-6"
            label="Confirm Password"
            error={
              this.state.errorMessages.confirmPasswordErrorMessagesShow && (
                <span>Passwords do not match</span>
              )
            }
          >
            <TextInputField
              name="confirmPasswordInputField"
              onChange={this.confirmPasswordOnChangeHandler}
              value={this.state.form.confirmPassword}
              placeholder="Confirm Password"
            />
          </FormGroup>
          <FormGroup>
            {JSON.stringify(this.state.form) !==
            JSON.stringify(this.state.defaultForm) ? (
              <FilledButton name="loginBtn" type="submit" fullWidth>
                Register
              </FilledButton>
            ) : (
              <FilledButton disabled name="loginBtn" type="submit" fullWidth>
                Register
              </FilledButton>
            )}
          </FormGroup>
        </Form>
        <Spinner spinnerShowing={this.state.spinnerShowing} />
      </Container>
    );
  }
}

export default RegisterPage;
