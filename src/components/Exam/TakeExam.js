import React from "react";
import { Button, Form } from "semantic-ui-react";

function TakeExam() {
  return (
    <div>
      <Form>
        <Form.Field>
          <label>Exam ID</label>
          <input placeholder="Enter the exam id" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default TakeExam;
