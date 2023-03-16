import { useDispatch } from "react-redux";
import LoginForm from "components/loginForm/LoginForm";

import {login } from "redux/auth/auth-operations";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = (data) => {
    dispatch(login(data))
  }

  return (
    <LoginForm onSubmit={handleLogin}/>
  )
}

export default LoginPage;