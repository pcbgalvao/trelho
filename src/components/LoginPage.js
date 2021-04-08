import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import ModalPopUp from "./ModalPopUp";

import { Form as FormDisplay, Button, Label, Input } from "semantic-ui-react";
import { loginUser } from "../store/userLoggedInSlice";
import { USERS_URL_PATH } from "../constants";
console.log("USERS_URL_PATH-", USERS_URL_PATH);

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

const LoginPage = (props) => {
  const history = useHistory();
  const onSubmit = async (userCredentials) => {
    console.log(
      ">>>>>>>>>>>>>>>>>>>< userCredentials-" + JSON.stringify(userCredentials)
    );
    console.log(">>>>>>>>>>>>>>>>>>><-props.loginUser" + props.loginUser);
    const response = await props.loginUser(userCredentials);
    console.log("Post created, with the following values-", response);
    history.push("/");
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
  const rrenderInput = ({ input, meta, placeholder }) => {
    return (
      <div className={meta.active ? "active" : ""}>
        <Label>Full Name</Label>
        <Input {...input} placeholder={placeholder} />
        {meta.error && meta.touched && <span>{meta.error}</span>}
      </div>
    );
  };

  const UserNameField = (props) => {
    return (
      <Field
        name="username"
        label="User Name"
        type="text"
        placeholder="your user name"
        component={renderInput}
      />
    );
  };

  const PasswordField = (props) => {
    return (
      <Field
        name="password"
        type="text"
        label="Password"
        component={renderInput}
      />
    );
  };

  return (
    <div>
      <h1>Login</h1>
      <div className="ui form">
        <Form onSubmit={onSubmit}>
          {({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <UserNameField />
              <PasswordField />
              <Button primary type="submit" disabled={submitting || pristine}>
                Submit
              </Button>{" "}
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

export default connect(null, { loginUser })(LoginPage);
