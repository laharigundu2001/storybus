import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import validator from 'validator';
import Axios from 'axios';
import "./Login.css";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState('')  

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path =  '/Unauthorised'; 
    navigate(path);
  }

  const loggedIn = true;
  localStorage.setItem('status' , loggedIn);

  const login = () => {
    Axios.post('http://localhost:8080/login', {
      email
    }).then((response) => {
      if(response.data === "Unauthorised"){
        routeChange();
      } 
      else{
        window.location.replace(response.data)
        loggedIn = true;
      }
    });
  };

  console.log(loggedIn);

  const validateEmail = (e) => {
    var email = e
  
    if (validator.isEmail(email)) {
      setEmailError('')
    } else {
      setEmailError('Enter valid Email!')
    }
  }

  function validateEmailAddress() {
    return validator.isEmail(email) 
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              validateEmail(e.target.value)
            }}
          />
          <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError}</span>
        </Form.Group>
        <br></br>
        <Button block size="lg" type="submit" disabled={!validateEmailAddress()} onClick = {() => {
            login();
        }}>
          Verify Email
        </Button>
      </Form>
    </div>
  );
}

