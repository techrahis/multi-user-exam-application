import React, { useEffect, useState } from "react";
import { Button, Form, Loader, Header, Segment } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { db } from "../../Firebase/firebase";
import { getAuth } from "firebase/auth";
import { useLoginContext } from "../../context/LoginContext";
import { doc, setDoc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";

function TakeExam() {
  const auth = getAuth();
  const user = auth.currentUser;
  const email = user.email;
  let { id } = useParams();
  const { data } = useLoginContext();
  if (data.accountType === "Institute") {
    alert("Institute is not allowed to view exam page!");
  } else if (data.accountType === null) {
    alert("SignIn to view exam page!");
    window.location.href = "/";
  }

  const [Edata, setEdata] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");
  const [question5, setQuestion5] = useState("");

  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [option5, setOption5] = useState("");

  function onChangeValue1(event) {
    setValue1(event.target.value);
  }
  function onChangeValue2(event) {
    setValue2(event.target.value);
  }
  function onChangeValue3(event) {
    setValue3(event.target.value);
  }
  function onChangeValue4(event) {
    setValue4(event.target.value);
  }
  function onChangeValue5(event) {
    setValue5(event.target.value);
  }

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const docRef = doc(db, "examination", "all");
    const docSnap = await getDoc(docRef);
    const datae = docSnap.data();
    let entries = Object.entries(datae);
    entries.map(([prop, val]) => {
      if (prop === id) {
        setEdata(val);
        const qEntries = Object.entries(val.questionData);
        setQuestion1(qEntries[0][1]);
        setQuestion2(qEntries[1][1]);
        setQuestion3(qEntries[2][1]);
        setQuestion4(qEntries[3][1]);
        setQuestion5(qEntries[4][1]);

        setOption1({
          one: qEntries[0][1].options[1],
          two: qEntries[0][1].options[2],
          three: qEntries[0][1].options[3],
          four: qEntries[0][1].options[4],
        });
        setOption2({
          one: qEntries[1][1].options[1],
          two: qEntries[1][1].options[2],
          three: qEntries[1][1].options[3],
          four: qEntries[1][1].options[4],
        });
        setOption3({
          one: qEntries[2][1].options[1],
          two: qEntries[2][1].options[2],
          three: qEntries[2][1].options[3],
          four: qEntries[2][1].options[4],
        });
        setOption4({
          one: qEntries[3][1].options[1],
          two: qEntries[3][1].options[2],
          three: qEntries[3][1].options[3],
          four: qEntries[3][1].options[4],
        });
        setOption5({
          one: qEntries[4][1].options[1],
          two: qEntries[4][1].options[2],
          three: qEntries[4][1].options[3],
          four: qEntries[4][1].options[4],
        });
      }
    });
  };

  const calsMarks = (e) => {
    let marks = 0;
    if (question1.answer === value1) marks++;
    if (question2.answer === value2) marks++;
    if (question3.answer === value3) marks++;
    if (question4.answer === value4) marks++;
    if (question5.answer === value5) marks++;
    return (Edata.totalmarks / 5) * marks;
  };

  const submit = (e) => {
    const score = calsMarks();
    console.log(score);
    try {
      setDoc(
        doc(db, "result", id),
        {
          [email]: score,
        },
        { merge: true }
      );
    } catch (e) {
      alert("Error adding document: ", e);
    } finally {
      window.location.href = "/";
    }
  };

  return (
    <div>
      <Segment inverted>
        <Header>{Edata.examname}</Header>
        <Header>Duration - {Edata.duration} minutes</Header>
        <Header>Total Marks - {Edata.totalmarks} marks</Header>
      </Segment>

      <Segment inverted>
        <Form>
          <Segment>
            <Header>{question1.question}</Header>
            <Form.Group inline>
              <div onChange={onChangeValue1}>
                <ol>
                  <input
                    type="radio"
                    value="1"
                    name="value1"
                    checked={value1 === "1"}
                  />
                  A. {option1.one}
                </ol>
                <ol>
                  <input
                    type="radio"
                    value="2"
                    name="value1"
                    checked={value1 === "2"}
                  />
                  B. {option1.two}
                </ol>
                <ol>
                  <input
                    type="radio"
                    value="3"
                    name="value1"
                    checked={value1 === "3"}
                  />
                  C. {option1.three}
                </ol>
                <ol>
                  <input
                    type="radio"
                    value="4"
                    name="value1"
                    checked={value1 === "4"}
                  />
                  D. {option1.four}
                </ol>
              </div>
            </Form.Group>
          </Segment>
          <Segment>
            <Header>{question2.question}</Header>
            <Form.Group inline>
              <div onChange={onChangeValue2}>
                <ol>
                  <input
                    type="radio"
                    value="1"
                    name="value2"
                    checked={value2 === "1"}
                  />
                  A. {option2.one}
                </ol>
                <ol>
                  <input
                    type="radio"
                    value="2"
                    name="value2"
                    checked={value2 === "2"}
                  />
                  B. {option2.two}
                </ol>
                <ol>
                  <input
                    type="radio"
                    value="3"
                    name="value2"
                    checked={value2 === "3"}
                  />
                  C. {option2.three}
                </ol>
                <ol>
                  <input
                    type="radio"
                    value="4"
                    name="value2"
                    checked={value2 === "4"}
                  />
                  D. {option2.four}
                </ol>
              </div>
            </Form.Group>
          </Segment>
          <Segment>
            <Header>{question3.question}</Header>
            <Form.Group inline>
              <div onChange={onChangeValue3}>
                <ol>
                  <input
                    type="radio"
                    value="1"
                    name="value3"
                    checked={value3 === "1"}
                  />
                  A. {option3.one}
                </ol>
                <ol>
                  <input
                    type="radio"
                    value="2"
                    name="value3"
                    checked={value3 === "2"}
                  />
                  B. {option3.two}
                </ol>
                <ol>
                  <input
                    type="radio"
                    value="3"
                    name="value3"
                    checked={value3 === "3"}
                  />
                  C. {option3.three}
                </ol>
                <ol>
                  <input
                    type="radio"
                    value="4"
                    name="value3"
                    checked={value3 === "4"}
                  />
                  D. {option3.four}
                </ol>
              </div>
            </Form.Group>
          </Segment>
          <Segment>
            <Header>{question4.question}</Header>
            <Form.Group inline>
              <div onChange={onChangeValue4}>
                <ol>
                  <input
                    type="radio"
                    value="1"
                    name="value4"
                    checked={value4 === "1"}
                  />
                  A. {option4.one}
                </ol>
                <ol>
                  <input
                    type="radio"
                    value="2"
                    name="value4"
                    checked={value4 === "2"}
                  />
                  B. {option4.two}
                </ol>
                <ol>
                  <input
                    type="radio"
                    value="3"
                    name="value4"
                    checked={value4 === "3"}
                  />
                  C. {option4.three}
                </ol>
                <ol>
                  <input
                    type="radio"
                    value="4"
                    name="value4"
                    checked={value4 === "4"}
                  />
                  D. {option4.four}
                </ol>
              </div>
            </Form.Group>
          </Segment>
          <Segment>
            <Header>{question5.question}</Header>
            <Form.Group inline>
              <div onChange={onChangeValue5}>
                <ol>
                  <input
                    type="radio"
                    value="1"
                    name="value5"
                    checked={value5 === "1"}
                  />
                  A. {option5.one}
                </ol>
                <ol>
                  <input
                    type="radio"
                    value="2"
                    name="value5"
                    checked={value5 === "2"}
                  />
                  B. {option5.two}
                </ol>
                <ol>
                  <input
                    type="radio"
                    value="3"
                    name="value5"
                    checked={value5 === "3"}
                  />
                  C. {option5.three}
                </ol>
                <ol>
                  <input
                    type="radio"
                    value="4"
                    name="value5"
                    checked={value5 === "4"}
                  />
                  D. {option5.four}
                </ol>
              </div>
            </Form.Group>
          </Segment>

          <Button primary type="submit" onClick={submit}>
            Submit
          </Button>
        </Form>
      </Segment>
    </div>
  );
}

export default TakeExam;
