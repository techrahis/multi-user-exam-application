import React, { useState } from "react";
import { Header, Form, Segment, Button } from "semantic-ui-react";
import { useLoginContext } from "../../context/LoginContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import { getAuth } from "firebase/auth";

function SetExam() {
  const { data } = useLoginContext();
  const auth = getAuth();
  const user = auth.currentUser;
  if (data.accountType === "Student" || data.accountType === "") {
    window.history.back();
    alert("You are not allowed to visit this page of the application!");
  }

  const [examname, setExamname] = useState("");
  const [totalmarks, setTotalmarks] = useState("");
  const [duration, setDuration] = useState("");
  const [examid, setExamid] = useState("");

  const [questionone, setQuestionone] = useState("");
  const [questionone_one, setQuestionone_one] = useState("");
  const [questionone_two, setQuestionone_two] = useState("");
  const [questionone_three, setQuestionone_three] = useState("");
  const [questionone_four, setQuestionone_four] = useState("");

  const [questiontwo, setQuestiontwo] = useState("");
  const [questiontwo_one, setQuestiontwo_one] = useState("");
  const [questiontwo_two, setQuestiontwo_two] = useState("");
  const [questiontwo_three, setQuestiontwo_three] = useState("");
  const [questiontwo_four, setQuestiontwo_four] = useState("");

  const [questionthree, setQuestionthree] = useState("");
  const [questionthree_one, setQuestionthree_one] = useState("");
  const [questionthree_two, setQuestionthree_two] = useState("");
  const [questionthree_three, setQuestionthree_three] = useState("");
  const [questionthree_four, setQuestionthree_four] = useState("");

  const [questionfour, setQuestionfour] = useState("");
  const [questionfour_one, setQuestionfour_one] = useState("");
  const [questionfour_two, setQuestionfour_two] = useState("");
  const [questionfour_three, setQuestionfour_three] = useState("");
  const [questionfour_four, setQuestionfour_four] = useState("");

  const [questionfive, setQuestionfive] = useState("");
  const [questionfive_one, setQuestionfive_one] = useState("");
  const [questionfive_two, setQuestionfive_two] = useState("");
  const [questionfive_three, setQuestionfive_three] = useState("");
  const [questionfive_four, setQuestionfive_four] = useState("");

  const [option_one, setOption_one] = useState("");
  const [option_two, setOption_two] = useState("");
  const [option_three, setOption_three] = useState("");
  const [option_four, setOption_four] = useState("");
  const [option_five, setOption_five] = useState("");

  const options = [
    { key: "a", text: "Option A", value: "1" },
    { key: "b", text: "Option B", value: "2" },
    { key: "c", text: "Option C", value: "3" },
    { key: "d", text: "Option D", value: "4" },
  ];

  const submit = (e) => {
    const questionData = {
      1: {
        question: questionone,
        options: {
          1: questionone_one,
          2: questionone_two,
          3: questionone_three,
          4: questionone_four,
        },
        answer: option_one,
      },
      2: {
        question: questiontwo,
        options: {
          1: questiontwo_one,
          2: questiontwo_two,
          3: questiontwo_three,
          4: questiontwo_four,
        },
        answer: option_two,
      },
      3: {
        question: questionthree,
        options: {
          1: questionthree_one,
          2: questionthree_two,
          3: questionthree_three,
          4: questionthree_four,
        },
        answer: option_three,
      },
      4: {
        question: questionfour,
        options: {
          1: questionfour_one,
          2: questionfour_two,
          3: questionfour_three,
          4: questionfour_four,
        },
        answer: option_four,
      },
      5: {
        question: questionfive,
        options: {
          1: questionfive_one,
          2: questionfive_two,
          3: questionfive_three,
          4: questionfive_four,
        },
        answer: option_five,
      },
    };
    try {
      setDoc(
        doc(db, "examination", user.email),
        {
          [examid]: examid,
        },
        { merge: true }
      );
    } catch (e) {
      alert("Error adding document: ", e);
    }
    try {
      setDoc(
        doc(db, "examination", examid),
        {
          [examid]: user.email,
        },
        { merge: true }
      );
    } catch (e) {
      alert("Error adding document: ", e);
    }
    try {
      setDoc(
        doc(db, "examination", "all"),
        {
          [examid]: {
            questionData: questionData,
            examname: examname,
            duration: duration,
            totalmarks: totalmarks,
          },
        },
        { merge: true }
      );
    } catch (e) {
      alert("Error adding document: ", e);
    } finally {
      window.history.back();
    }
  };

  return (
    <div>
      <Segment inverted>
        <Header textAlign="center">Set 5 MCQ Questions in development</Header>
        <Form>
          <Segment inverted>
            <Form.Input
              fluid
              label="Set examination details"
              placeholder="Name of the examination"
              value={examname}
              onChange={(e) => setExamname(e.target.value)}
            />
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Duration"
                placeholder="Set duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
              <Form.Input
                fluid
                label="Total marks"
                placeholder="Total marks"
                value={totalmarks}
                onChange={(e) => setTotalmarks(e.target.value)}
              />
              <Form.Input
                fluid
                label="Exam ID"
                placeholder="Unique for every exam conducted by your institute"
                value={examid}
                onChange={(e) => setExamid(e.target.value)}
              />
            </Form.Group>
          </Segment>
          <Segment>
            <Form.Input
              fluid
              label="Question 1"
              placeholder="Write question here..."
              value={questionone}
              onChange={(e) => setQuestionone(e.target.value)}
            />
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Option A"
                placeholder="Option one"
                value={questionone_one}
                onChange={(e) => setQuestionone_one(e.target.value)}
              />
              <Form.Input
                fluid
                label="Option B"
                placeholder="Option two"
                value={questionone_two}
                onChange={(e) => setQuestionone_two(e.target.value)}
              />
              <Form.Input
                fluid
                label="Option C"
                placeholder="Option three"
                value={questionone_three}
                onChange={(e) => setQuestionone_three(e.target.value)}
              />
              <Form.Input
                fluid
                label="Option D"
                placeholder="Option four"
                value={questionone_four}
                onChange={(e) => setQuestionone_four(e.target.value)}
              />
            </Form.Group>
            <Form.Select
              options={options}
              placeholder="Choose corect option"
              onChange={(e, data) => {
                setOption_one(data.value);
              }}
            />
          </Segment>
          <Segment>
            <Form.Input
              fluid
              label="Question 2"
              placeholder="Write question here..."
              value={questiontwo}
              onChange={(e) => setQuestiontwo(e.target.value)}
            />
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Option A"
                placeholder="Option one"
                value={questiontwo_one}
                onChange={(e) => setQuestiontwo_one(e.target.value)}
              />
              <Form.Input
                fluid
                label="Option B"
                placeholder="Option two"
                value={questiontwo_two}
                onChange={(e) => setQuestiontwo_two(e.target.value)}
              />
              <Form.Input
                fluid
                label="Option C"
                placeholder="Option three"
                value={questiontwo_three}
                onChange={(e) => setQuestiontwo_three(e.target.value)}
              />
              <Form.Input
                fluid
                label="Option D"
                placeholder="Option four"
                value={questiontwo_four}
                onChange={(e) => setQuestiontwo_four(e.target.value)}
              />
            </Form.Group>
            <Form.Select
              options={options}
              placeholder="Choose corect option"
              onChange={(e, data) => {
                setOption_two(data.value);
              }}
            />
          </Segment>
          <Segment>
            <Form.Input
              fluid
              label="Question 3"
              placeholder="Write question here..."
              value={questionthree}
              onChange={(e) => setQuestionthree(e.target.value)}
            />
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Option A"
                placeholder="Option one"
                value={questionthree_one}
                onChange={(e) => setQuestionthree_one(e.target.value)}
              />
              <Form.Input
                fluid
                label="Option B"
                placeholder="Option two"
                value={questionthree_two}
                onChange={(e) => setQuestionthree_two(e.target.value)}
              />
              <Form.Input
                fluid
                label="Option C"
                placeholder="Option three"
                value={questionthree_three}
                onChange={(e) => setQuestionthree_three(e.target.value)}
              />
              <Form.Input
                fluid
                label="Option D"
                placeholder="Option four"
                value={questionthree_four}
                onChange={(e) => setQuestionthree_four(e.target.value)}
              />
            </Form.Group>
            <Form.Select
              options={options}
              placeholder="Choose corect option"
              onChange={(e, data) => {
                setOption_three(data.value);
              }}
            />
          </Segment>
          <Segment>
            <Form.Input
              fluid
              label="Question 4"
              placeholder="Write question here..."
              value={questionfour}
              onChange={(e) => setQuestionfour(e.target.value)}
            />
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Option A"
                placeholder="Option one"
                value={questionfour_one}
                onChange={(e) => setQuestionfour_one(e.target.value)}
              />
              <Form.Input
                fluid
                label="Option B"
                placeholder="Option two"
                value={questionfour_two}
                onChange={(e) => setQuestionfour_two(e.target.value)}
              />
              <Form.Input
                fluid
                label="Option C"
                placeholder="Option three"
                value={questionfour_three}
                onChange={(e) => setQuestionfour_three(e.target.value)}
              />
              <Form.Input
                fluid
                label="Option D"
                placeholder="Option four"
                value={questionfour_four}
                onChange={(e) => setQuestionfour_four(e.target.value)}
              />
            </Form.Group>
            <Form.Select
              options={options}
              placeholder="Choose corect option"
              onChange={(e, data) => {
                setOption_four(data.value);
              }}
            />
          </Segment>
          <Segment>
            <Form.Input
              fluid
              label="Question 5"
              placeholder="Write question here..."
              value={questionfive}
              onChange={(e) => setQuestionfive(e.target.value)}
            />
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Option A"
                placeholder="Option one"
                value={questionfive_one}
                onChange={(e) => setQuestionfive_one(e.target.value)}
              />
              <Form.Input
                fluid
                label="Option B"
                placeholder="Option two"
                value={questionfive_two}
                onChange={(e) => setQuestionfive_two(e.target.value)}
              />
              <Form.Input
                fluid
                label="Option C"
                placeholder="Option three"
                value={questionfive_three}
                onChange={(e) => setQuestionfive_three(e.target.value)}
              />
              <Form.Input
                fluid
                label="Option D"
                placeholder="Option four"
                value={questionfive_four}
                onChange={(e) => setQuestionfive_four(e.target.value)}
              />
            </Form.Group>
            <Form.Select
              options={options}
              placeholder="Choose corect option"
              onChange={(e, data) => {
                setOption_five(data.value);
              }}
            />
          </Segment>
          <Button primary type="submit" onClick={submit}>
            Set Exam
          </Button>
        </Form>
      </Segment>
    </div>
  );
}

export default SetExam;
