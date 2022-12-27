import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Full } from "../components/cart/CartEmpty";
import { MailIcon, PassIcon } from "../components/OrderForm";
import axios from "axios";
import { POST_USER } from "../env";
import Spinner from "../components/utils/Spinner";
import Loader from "../components/utils/Loader";

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 10px;
  width: 65vw;
  gap: 15px;

  @media (min-width: 750px) {
    width: 40vw;
  }
`;

const Input = styled.input`
  width: 100%;
`;

const Inner = styled.div`
  background: #f6f6f6;
  box-shadow: 0 0 40px rgb(86 86 86 / 30%);
  padding: 40px;
  border-radius: 10px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
`;

const IpnutWrapper = styled.div`
  border-bottom: 1px solid #000000;
  display: flex;
  align-items: center;
  gap: 15px;
  padding-bottom: 10px;
`;

const Send = styled.input`
  display: inline-block;
  padding: 8px;
  background: #000000;
  color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  width: 50%;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
`;
const Links = styled(Link)`
  color: #000000;
  font-size: 17px;
  text-align: center;
`;

export const UserLogin: React.FC = () => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [isAuth, setIstAuth] = useState(false);
  const [users, setUsers] = useState<
    {
      mail: string;
      pass: string;
    }[]
  >();

  const onCLickLogin = async () => {
    if (mail !== "") {
      try {
        setIstAuth(true);
        const { data } = await axios.post(`${POST_USER}`, { mail, pass });
      } catch (error) {
        alert("Falied Registration");
      }
      setIstAuth(false);
    }
  };

  useEffect(() => {
    axios.get(POST_USER).then(({ data }) => setUsers(data));
    // eslint-disable-next-line
  }, []);

  if (!users) {
    return <Spinner />;
  }

  return (
    <Full>
      {users.length > 0 ? (
        <div>
          <h2>You is Auth</h2>
        </div>
      ) : (
        <Inner>
          {isAuth ? <Loader /> : ""}
          <Title>Login Page</Title>
          <Form>
            <Label>Email</Label>
            <IpnutWrapper>
              <MailIcon />
              <Input
                type="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                required
              />
            </IpnutWrapper>
            <Label>Password</Label>
            <IpnutWrapper>
              <PassIcon />
              <Input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                required
              />
            </IpnutWrapper>
            <Send type="submit" value="Login" onClick={onCLickLogin} />
          </Form>
          <Links to="/user">Create account</Links>
        </Inner>
      )}
    </Full>
  );
};

export default UserLogin;
