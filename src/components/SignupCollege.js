import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Button, Form } from "semantic-ui-react";
import { auth, db } from "../Firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useLoginContext } from "../context/LoginContext";

function SignupCollege() {
  const { logIn } = useLoginContext();
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/", { replace: true });
        logIn(user.email, "institute");
      })
      .catch((error) => {
        alert(error.message);
      });

    try {
      setDoc(
        doc(db, "institute", "all"),
        {
          [email]: {
            name: name,
            bio: bio,
            address: address,
            phone: phone,
          },
        },
        { merge: true }
      );
    } catch (e) {
      alert("Error adding document: ", e);
    }
  };
  return (
    <div>
      <Header as="h2" textAlign="center">
        Institute Registration
      </Header>
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name of the institute"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name of the institute"
          />
          <Form.Input
            fluid
            label="Short Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Write a short bio..."
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Location of the institute"
          />
          <Form.Input
            fluid
            label="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Contact number"
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

export default SignupCollege;
