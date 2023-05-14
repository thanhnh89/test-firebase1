import React, { useState } from 'react'
import {
  PopupLoginWrapper,
  Text,
  Column,
  Input,
  Button,
  Blank,
  FieldName,
  LoginGoogle,
  Icon,
  TextError,
} from './loginStyle'
import StorageUtils from '../../helpers/StorageUtils'
import { auth } from "../../services/firebase";
import Images from '../../asset/images';
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

const provider = new GoogleAuthProvider();
auth.languageCode = 'vn';

const LoginCore = () => {
  const [state, setState] = useState({
    userName: '',
    userNameError: '',
    password: '',
    passwordError: '',
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

    setState(newState);
    return result;
  }

  const handleLogin = () => {
    if (validate() === false) return;
    signInWithEmailAndPassword(auth, state.userName, state.password).then(
      (userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        StorageUtils.setItem("token", user.stsTokenManager.accessToken)
        StorageUtils.setItem("email", user.email)
    }).catch((error) => {
      window.alert("user name or password incorrect")
  });
  }

  const handleUserName = (event) => {
    setState({ ...state, userName: event.target.value })
  }

  const handlePassword = (event) => {
    setState({ ...state, password: event.target.value })
  }

  const loginWidthGoogle = () => {
    console.log("loginWidthGoogle");
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log("credential = ", credential);
      console.log("user = ", user);
      // IdP data available using getAdditionalUserInfo(result)
      StorageUtils.setItem("token", token)
      StorageUtils.setItem("email", user.email)
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  return (
    <PopupLoginWrapper>
    <Text color="black" fontSize={25}>
        Login
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

        <Button onClick={handleLogin}>Login</Button>
        <LoginGoogle onClick={loginWidthGoogle}>
          <Icon src={Images.GoogleIcon} alt="google"/>
          Login Google
        </LoginGoogle>
    </Column>
    </PopupLoginWrapper>
  )
}

export default LoginCore;