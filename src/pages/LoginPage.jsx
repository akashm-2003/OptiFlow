import React, { useState } from "react";
import styled from "styled-components";
import { auth } from "../firebase.config";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // Handle successful login, e.g., redirect to dashboard
    } catch (error) {
      console.error(error);
      // Handle login error, e.g., display error message
    }
  };

  return (
    <div style={{opacity:0.8}}>
      <Container>
        
        <FormContainer style={{opacity:0.9}}>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={()=>{
              // Redirect to dashboard after successful login
              window.location.href = "/dashboard";
            }}>Login</Button>
          </form>
        </FormContainer>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default LoginPage;
