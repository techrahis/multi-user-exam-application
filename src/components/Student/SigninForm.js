import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Button, Form } from "semantic-ui-react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useLoginContext } from "../../context/LoginContext";

function SigninForm() {
  const { logOut } = useLoginContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn } = useLoginContext();
  let navigate = useNavigate();

  const signIn = (e) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user.displayName === "Student") {
          navigate("/", { replace: true });
          logIn(user.email, "Student");
        } else {
          alert("You are not a Student");
          logOut();
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div>
      <Header as="h2" textAlign="center">
        Student Login
      </Header>
      <Form>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Checkbox label="I agree to the Terms and Conditions" />
        <Button primary type="submit" onClick={signIn}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default SigninForm;
