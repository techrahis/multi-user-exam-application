import React from "react";
import { Header, Card, Button } from "semantic-ui-react";
import { useLoginContext } from "../../context/LoginContext";

function StudentDash() {
  const { data } = useLoginContext();

  return (
    <div>
      <Header textAlign="center">Student Dashboard</Header>
      <hr />

      <Card centered>
        <Card.Content
          header={data.userInfo.firstName + " " + data.userInfo.lastName}
        />
        <Card.Content description={data.userInfo.email} />
        <Card.Content extra>
          <p>{data.accountType}</p>
        </Card.Content>
        <Card.Content extra>
          <Button secondary>Edit</Button>
          <Button primary>Exams Appeared</Button>
        </Card.Content>
      </Card>
    </div>
  );
}

export default StudentDash;
