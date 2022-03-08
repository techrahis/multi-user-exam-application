import React from "react";
import { Link } from "react-router-dom";
import { Header, Card, Button } from "semantic-ui-react";
import { useLoginContext } from "../../context/LoginContext";
import SetExam from "../Exam/SetExam";

function InstituteDash() {
  const { data } = useLoginContext();

  return (
    <div>
      <Header textAlign="center">Institute Dashboard</Header>
      <hr />

      <Card centered>
        <Card.Content header={data.userInfo.name} />
        <Card.Content description={data.userInfo.bio} />
        <Card.Content extra>
          <p>{data.accountType}</p>
        </Card.Content>
        <Card.Content extra contentAlign="center">
          <Button secondary>Edit</Button>
          <Link to="/setexam">
            <Button primary>Set Exam</Button>
          </Link>
        </Card.Content>
      </Card>
    </div>
  );
}

export default InstituteDash;
