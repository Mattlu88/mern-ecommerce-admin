import { useState } from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "../components/UI/Input";
import userService from "../services/user";
import { Redirect } from "react-router-dom";

const Signin = (props) => {
  const { loginUser, setLoginUser } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = (e) => {
    e.preventDefault();
    userService
      .signIn({ email, password })
      .then((data) => {
        console.log(data);
        setLoginUser(data.user);
        localStorage.setItem("mern-ecom-token", data.token);
        localStorage.setItem("mern-ecom-user", JSON.stringify(data.user));
      })
      .catch((error) => console.log(error.message));
  };

  if (loginUser) return <Redirect to="/" />;

  return (
    <Layout>
      <Container style={{ marginTop: "40px" }}>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h2>Sign-In</h2>
            <Form onSubmit={userLogin}>
              <Input
                controlId={"signin-email"}
                label={"Email"}
                type={"email"}
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
              <Input
                controlId={"signin-password"}
                label={"Password"}
                type={"password"}
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
              <Button variant="primary" type="submit">
                Sign-In
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signin;
