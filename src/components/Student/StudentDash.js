import React, { useEffect, useState } from "react";
import { Header, Card, Button, Table } from "semantic-ui-react";
import { useLoginContext } from "../../context/LoginContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebase";

function StudentDash() {
  const { data } = useLoginContext();
  const [data2, setData2] = useState("");
  const [data3, setData3] = useState("");

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const docRef = doc(db, "result", data.userInfo.email);
    const docSnap = await getDoc(docRef);
    setData2(Object.entries(docSnap.data()));
    for (let i = 0; i < data2.length; i++) {
      const docRef2 = doc(db, "examination", data2[i][0]);
      const docSnap2 = await getDoc(docRef2);
      const val = Object.entries(docSnap2.data());
      let newData = data2;
      newData[i][2] = val[0][1];
      setData3(newData);
      console.log(data3)
    }
  };

  return (
    <div>
      <Card>
        <Card.Content
          header={data.userInfo.firstName + " " + data.userInfo.lastName}
        />
        <Card.Content description={data.userInfo.email} />
        <Card.Content extra>
          <p>{data.accountType}</p>
        </Card.Content>
        <Card.Content extra>
          <Button secondary>Edit - S2</Button>
        </Card.Content>
      </Card>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Exam ID</Table.HeaderCell>
            <Table.HeaderCell>Exam name</Table.HeaderCell>
            <Table.HeaderCell>Your marks</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data3.length > 0 &&
            data3.map((data3) => (
              <Table.Row>
                <Table.Cell>{data3[0]}</Table.Cell>
                <Table.Cell>{data3[2]}</Table.Cell>
                <Table.Cell>{data3[1]}</Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default StudentDash;
