import React, { Component } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

const Container = styled.div`
  margin: 6rem auto;
  max-width: 1200px;
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  margin: 0px auto;
  width: 50%;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  -webkit-transition: border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-ou;
`;

const TextArea = styled.textarea`
  height: 8rem !important;
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  -webkit-transition: border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-ou;
`;

const Label = styled.label`
  margin-bottom: 1rem;
`;

const SendButton = styled.button`
  padding: 1.3rem 3rem;
  background-color: black;
  color: white;
  font-size: 1rem;
  display: flex;
  justify-content: flex-start;
`;

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;
    let templateParams = {
      from_name: name,
      from_email: email,
      to_name: "alvaro.castillo777@gmail.com",
      message_html: message
    };
    emailjs.send(
      "gmail",
      "template_QZo39oj0",
      templateParams,
      "user_CSYMbZQ69Olfg3zTgWPQu"
    );
    this.resetForm();
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      message: ""
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Label>Your Full Name:</Label>
          <Input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange.bind(this, "name")}
          />
          <Label>Your Email Address:</Label>
          <Input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange.bind(this, "email")}
          />
          <Label>Your Message or Offer:</Label>
          <TextArea
            name="message"
            type="textarea"
            value={this.state.message}
            onChange={this.handleChange.bind(this, "message")}
          />
          <SendButton type="submit">Send</SendButton>
        </Form>
      </Container>
    );
  }
}

export default Contact;
