import React, { useState } from 'react'
import {
  Wrapper,
  PopupLoginWrapper,
  Text,
  Column,
  Input,
  Button,
  Blank,
  FieldName,
  TextError,
} from '../login/loginStyle'
import { auth } from "../../services/firebase";
import {  createUserWithEmailAndPassword   } from 'firebase/auth';

const LoginCore = () => {
  const [state, setState] = useState({
    userName: '',
    userNameError: '',
    password: '',
    passwordError: '',
    repeatPassword: '',
    repeatPasswordError: '',
  });

  const validate = () => {
    const newState = { ...state };
    let result = true;
    if (state.userName.length === 0)
    {
      newState.userNameError = "This field is required";
      result = false;
    }
    else
      newState.userNameError = "";
    
    if (state.password.length === 0)
    {
      newState.passwordError = "This field is required";
      result = false;
    }
    else
      newState.passwordError = "";

    if (state.repeatPassword.length === 0)
    {
      newState.repeatPasswordError = "This field is required";
      result = false;
    }
    else if (state.repeatPassword !== state.password)
    {
      newState.repeatPasswordError = "Password and password repeat do not match";
      result = false;
    }
    else
      newState.repeatPasswordError = "";

    setState(newState);
    return result;
  }

  const handleRegister = async () => {
    if (validate() === false) return;
    await createUserWithEmailAndPassword(auth, state.userName, state.password).then(
      (userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("Register success")
        window.location.replace("./login")
    }).catch((error) => {
      console.log("error = ", error)
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert(error.message)
  });
  }

  const handleUserName = (event) => {
    setState({ ...state, userName: event.target.value })
  }

  const handlePassword = (event) => {
    setState({ ...state, password: event.target.value })
  }

  const handleRepeatPassword = (event) => {
    setState({ ...state, repeatPassword: event.target.value })
  }

  return (
    <Wrapper>
      <PopupLoginWrapper>
      <Text color="black" fontSize={25}>
          Register
      </Text>
      <Column>
          <FieldName>User name</FieldName>
          <Input value={state.userName} onChange={handleUserName} />
          { state.userNameError.length > 0 && <TextError>{state.userNameError}</TextError>}
          <Blank height={0.5} />
          <FieldName>Password</FieldName>
          <Input
            value={state.password}
            onChange={handlePassword}
            type="password"
          />
          { state.passwordError.length > 0 && <TextError>{state.passwordError}</TextError>}
          <Blank height={0.5} />
          <FieldName>Repeat password</FieldName>
          <Input
            value={state.repeatPassword}
            onChange={handleRepeatPassword}
            type="password"
          />
          { state.repeatPasswordError.length > 0 && <TextError>{state.repeatPasswordError}</TextError>}

          <Button onClick={handleRegister}>Register</Button>
      </Column>
      </PopupLoginWrapper>
    </Wrapper>
  )
}

export default LoginCore;