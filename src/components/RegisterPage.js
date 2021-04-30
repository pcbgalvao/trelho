import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";


import { Form as FormDisplay, Button, Label, Input } from "semantic-ui-react";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { USERS_URL_PATH } from "../constants";
import { createUser} from "../store/usersSlice";
//const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

/*const onHandleSubmit = async values => {
  console.log("onsubmit function called" + JSON.stringify(values));
  //await sleep(300);
  //window.alert(JSON.stringify(values, 0, 2));
  //console.log(values.title + " " + values.body);

  const post = {
    title: values.title,
    body: values.body
  };
  console.log("post: " + JSON.stringify(post));
  props.createPost(post);
};*/

const RegisterPage = (props) => {
  const onSubmit = (values) => {
    console.log(">>>>>>>>>>>>>>>>>>><" + props.createPost);
    const response = props.createUser(values);
    console.log("Post created, with the following values-", response);
  };

  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  const renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
      </div>
    );
  };

  const FullNameField = (props) => {
    return (
      <Field
        name="fullname"
        label="Full Name"
        type="text"
        placeholder="Enter fullname"
        component={renderInput}
      />
    );
  };

  const LoginUserField = (props) => {
    return (
      <Field
        name="username"
        type="text"
        placeholder="Enter your login user"
        label="User Login"
        component={renderInput}
      />
    );
  };

  const PasswordField = (props) => {
    return (
      <Field
        name="password"
        type="text"
        placeholder="Enter your password"
        label="Password"
        component={renderInput}
      />
    );
  };

  const VerifyPasswordField = (props) => {
    return (
      <Field
        name="verifypassword"
        type="text"
        placeholder="Enter same password to verify"
        label="Verify Password"
        component={renderInput}
      />
    );
  };

  return (
    <div>
      <h1>User Registration</h1>
      <div className="ui form">
        <Form onSubmit={onSubmit}>
          {({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <FullNameField />
              <LoginUserField />
              <PasswordField />
              <VerifyPasswordField />
              <Button primary type="submit" disabled={submitting || pristine}>
                Submit
              </Button>
              <Button
                secondary
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Clear
              </Button>
              <br />
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          )}
        </Form>
      </div>
    </div>
  );
};

export default connect(null, { createUser })(RegisterPage);
