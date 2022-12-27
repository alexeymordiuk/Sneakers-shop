import React, { useState } from "react";
import styled from "styled-components";
import { Full } from "../cart/CartEmpty";
import { Link, useNavigate } from "react-router-dom";
import { MailIcon, PassIcon, UserIcon } from "../OrderForm";
import axios from "axios";
import { POST_USER } from "../../env";
import Spinner from "../utils/Spinner";

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

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const AuthForm: React.FC = () => {
  const [user, setUser] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const navigate = useNavigate();

  const onCLickSend = async () => {
    if (mail !== "") {
      try {
        setIsAuth(true);
        const { data } = await axios.post(`${POST_USER}`, { mail, user, pass });
        await delay(2000);
        navigate("login");
      } catch (error) {
        alert("Falied Registration");
      }
      setIsAuth(false);
    }
  };

  return (
    <Full>
      {isAuth === true ? (
        <Spinner />
      ) : (
        <Inner>
          <Title>Registration Page</Title>
          <Form>
            <Label>Name</Label>
            <IpnutWrapper>
              <UserIcon />
              <Input
                type="text"
                required
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </IpnutWrapper>
            <Label>Email</Label>
            <IpnutWrapper>
              <MailIcon />
              <Input
                type="email"
                required
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </IpnutWrapper>
            <Label>Password</Label>
            <IpnutWrapper>
              <PassIcon />
              <Input
                type="password"
                required
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </IpnutWrapper>
            <Send type="submit" value="Registr" onClick={onCLickSend} />
          </Form>
          <Links to="login">Already have account?</Links>
        </Inner>
      )}
    </Full>
  );
};

export default AuthForm;
