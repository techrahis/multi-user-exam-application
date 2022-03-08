import React from "react";
import { Header, Form, Segment } from "semantic-ui-react";
import { useLoginContext } from "../../context/LoginContext";

function SetExam() {
  const { data } = useLoginContext();
  if (data.accountType === "Student" || data.accountType === "") {
    alert("You are not allowed to visit this page of the application!");
    window.location.href = "/";
  }
  return (
    <div>
      <Segment>
        <Header textAlign="center">Set 5 MCQ Questions in development</Header>
        <Form>
          <Segment>
            <Form.Input
              fluid
              label="Question One"
              placeholder="Write question here..."
            />
            <Form.Group widths="equal">
              <Form.Input fluid label="Option One" placeholder="Option one" />
              <Form.Input fluid label="Option Two" placeholder="Option two" />
              <Form.Input
                fluid
                label="Option Three"
                placeholder="Option three"
              />
              <Form.Input fluid label="Option Four" placeholder="Option four" />
            </Form.Group>
          </Segment>
          <Segment>
            <Form.Input
              fluid
              label="Question One"
              placeholder="Write question here..."
            />
            <Form.Group widths="equal">
              <Form.Input fluid label="Option One" placeholder="Option one" />
              <Form.Input fluid label="Option Two" placeholder="Option two" />
              <Form.Input
                fluid
                label="Option Three"
                placeholder="Option three"
              />
              <Form.Input fluid label="Option Four" placeholder="Option four" />
            </Form.Group>
          </Segment>
          <Segment>
            <Form.Input
              fluid
              label="Question One"
              placeholder="Write question here..."
            />
            <Form.Group widths="equal">
              <Form.Input fluid label="Option One" placeholder="Option one" />
              <Form.Input fluid label="Option Two" placeholder="Option two" />
              <Form.Input
                fluid
                label="Option Three"
                placeholder="Option three"
              />
              <Form.Input fluid label="Option Four" placeholder="Option four" />
            </Form.Group>
          </Segment>
          <Segment>
            <Form.Input
              fluid
              label="Question One"
              placeholder="Write question here..."
            />
            <Form.Group widths="equal">
              <Form.Input fluid label="Option One" placeholder="Option one" />
              <Form.Input fluid label="Option Two" placeholder="Option two" />
              <Form.Input
                fluid
                label="Option Three"
                placeholder="Option three"
              />
              <Form.Input fluid label="Option Four" placeholder="Option four" />
            </Form.Group>
          </Segment>
          <Segment>
            <Form.Input
              fluid
              label="Question One"
              placeholder="Write question here..."
            />
            <Form.Group widths="equal">
              <Form.Input fluid label="Option One" placeholder="Option one" />
              <Form.Input fluid label="Option Two" placeholder="Option two" />
              <Form.Input
                fluid
                label="Option Three"
                placeholder="Option three"
              />
              <Form.Input fluid label="Option Four" placeholder="Option four" />
            </Form.Group>
          </Segment>
        </Form>
      </Segment>
    </div>
  );
}

export default SetExam;
