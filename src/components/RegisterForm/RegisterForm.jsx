
import useForm from 'hooks/useForm';
import initialStateForm from './initialStateForm';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';


const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialStateForm,
    onSubmit,
  });

  const {name, email, password} = state;

  return (
    <form onSubmit={handleSubmit} >
      <TextField value={name} onChange={handleChange} type='text' required name='name' label='Name' placeholder='User name'/>
      <TextField value={email} onChange={handleChange} type='email' required name='email' label='Email' placeholder='Email@mail.com'/>
      <TextField value={password} onChange={handleChange} type='password' required name='password' label='Password' placeholder='6 simbols at least' />
      <Button type='submit'>Register</Button>
    </form>
  );
};
export default RegisterForm;
