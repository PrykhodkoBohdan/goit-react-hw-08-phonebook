
import useForm from 'hooks/useForm';
import initialStateForm from './initialStateForm';
import TextField from '../../TextField/TextField';
import Button from '../../Button/Button';
import css from "../Forms.module.css"

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialStateForm,
    onSubmit,
  });

  const {name, email, password} = state;

  return (
    <form onSubmit={handleSubmit} className={css.form} >
      <TextField value={name} onChange={handleChange} type='text' required name='name' label='Name' placeholder='Name'/>
      <TextField value={email} onChange={handleChange} type='email' required name='email' label='Email' placeholder='Email'/>
      <TextField value={password} onChange={handleChange} type='password' required name='password' label='Password' placeholder='Password' />
      <Button  type='submit' >Register</Button>
    </form>
  );
};
export default RegisterForm;
