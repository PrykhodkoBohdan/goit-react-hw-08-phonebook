
import useForm from 'hooks/useForm';
import initialStateForm from './initialStateForm';
import TextField from 'components/TextField/TextField';
import Button from 'components/Button/Button';

import css from "../Forms.module.css"


const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialStateForm,
    onSubmit,
  });

  const {email, password} = state;

  return (
    <form onSubmit={handleSubmit} className={css.form} >
      <TextField value={email} onChange={handleChange} type='email' required name='email' label='Email' placeholder='Email'/>
      <TextField value={password} onChange={handleChange} type='password' required name='password' label='Password' placeholder='Password'/>
      <Button type='submit' className={css.button}>Login</Button>
    </form>
  );
};
export default LoginForm;
