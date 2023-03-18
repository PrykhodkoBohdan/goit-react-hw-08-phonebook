import { useDispatch } from "react-redux";
import RegisterForm from "components/Forms/RegisterForm/RegisterForm";

import { signup } from "redux/auth/auth-operations";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSignup = (data) => {
    dispatch(signup(data))
  }

  return (
    <RegisterForm onSubmit={handleSignup}/>
  )
}

export default RegisterPage;