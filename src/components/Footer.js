import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <br />
        <Container textAlign="center">
          <div className="footer">
            <Header>an i𝚐𝚗𝚘𝚛𝚎𝚌𝚛𝚘𝚠𝚍.co.in project</Header>
            <p>
              College Exam Project version 0.1 <br /> Copyright &copy; 2022
              𝚒𝚐𝚗𝚘𝚛𝚎𝚌𝚛𝚘𝚠𝚍
            </p>
          </div>
        </Container>
      </div>
    );
  }
}
