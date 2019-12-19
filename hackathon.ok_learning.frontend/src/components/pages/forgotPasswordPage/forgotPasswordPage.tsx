import React, { Component } from "react";
import { Heading1 } from "@jsluna/typography";
import { Container } from "@jsluna/grid";
import { Form, FormGroup, TextInputField } from "@jsluna/form";
import { FilledButton, LinkButton } from "@jsluna/button";
import Spinner from "../../spinner/spinner";
import "./forgotPasswordPage.css";

type ForgotPasswordPagePropType = {
  history: any;
  children: any;
};

type ResetEmailRequestObjectType = {
  email: string;
};

type ForgotPasswordPageStateType = {
  form: {
    email: string;
  };
  defaultForm: {
    email: "";
  };
  emailErrorMessagesShow: Boolean;
  passwordErrorMessagesShow: Boolean;
  spinnerShowing: Boolean;
};

class ForgotPasswordPage extends Component<
  ForgotPasswordPagePropType,
  ForgotPasswordPageStateType
> {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        email: ""
      },
      defaultForm: {
        email: ""
      },
      emailErrorMessagesShow: false,
      passwordErrorMessagesShow: false,
      spinnerShowing: false
    };
  }

  resetPassword = (e: any): void => {
    e.preventDefault();
    let resetEmailRequestObject: ResetEmailRequestObjectType = {
      email: this.state.form.email
    };

    console.log(resetEmailRequestObject);

    let newState = { ...this.state };
    newState.spinnerShowing = true;
    newState.form.email = "";
    this.setState(newState);

    //TO DO: Call API and Redirect to the main page
    setTimeout(() => {
      this.props.history.push("/main");
    }, 3000);
  };

  resetEmailOnChangeHandler = (e: any): void => {
    let newForm = { ...this.state.form };
    newForm.email = e.target.value;
    this.setState({ form: newForm });
  };

  render() {
    return (
      <Container element="div" className="forgotPasswordPage">
        <Container element="div" className="forgotPasswordPageHeadings">
          <img
            className="forgotPasswordPageImage"
            src="oklearninglogo.png"
            alt="Smiley face"
            width="200"
          />
          <Heading1 className="forgotPasswordPageHeaderText">
            Forgot Password
          </Heading1>
        </Container>

        <Form
          name="forgotPasswordPageForm"
          onSubmit={e => this.resetPassword(e)}
          className="forgotPasswordPageForm"
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
              name="resetEmailInputField"
              onChange={this.resetEmailOnChangeHandler}
              value={this.state.form.email}
              placeholder="Email"
            />
          </FormGroup>

          <FormGroup>
            {JSON.stringify(this.state.form) !==
            JSON.stringify(this.state.defaultForm) ? (
              <FilledButton name="loginBtn" type="submit" fullWidth>
                Send email
              </FilledButton>
            ) : (
              <FilledButton disabled name="loginBtn" type="submit" fullWidth>
                Send email
              </FilledButton>
            )}
            <LinkButton
              fullWidth
              onClick={(): void => this.props.history.push("main")}
            >
              Cancel
            </LinkButton>
          </FormGroup>
        </Form>
        <Spinner spinnerShowing={this.state.spinnerShowing} />
      </Container>
    );
  }
}

export default ForgotPasswordPage;
