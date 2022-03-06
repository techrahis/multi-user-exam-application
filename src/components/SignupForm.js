import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Button, Form } from "semantic-ui-react";
import { auth, db } from "../Firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useLoginContext } from "../context/LoginContext";

function SignupForm() {
  let navigate = useNavigate();
  const { logIn } = useLoginContext();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        navigate("/", { replace: true });
        logIn(user.email, "student");
      })
      .catch((error) => {
        alert(error.message);
      });

    try {
      setDoc(doc(db, "users", email), {
        firstName: fname,
        lastName: lname,
        email: email,
      });
    } catch (e) {
      alert("Error adding document: ", e);
    }
  };
  return (
    <div>
      <Header as="h2" textAlign="center">
        Student Registration
      </Header>
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="First name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            placeholder="First name"
          />
          <Form.Input
            fluid
            label="Last name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            placeholder="Last name"
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <Form.Input
            fluid
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>
        <Form.Checkbox label="I agree to the Terms and Conditions" />
        <Button primary type="submit" onClick={signUp}>
          Register
        </Button>
      </Form>
    </div>
  );
}

export default SignupForm;
