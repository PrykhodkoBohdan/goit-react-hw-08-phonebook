
import useForm from 'hooks/useForm';
import initialStateForm from './initialStateForm';
import TextField from 'components/TextField/TextField';
import Button from 'components/Button/Button';


const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialStateForm,
    onSubmit,
  });

  const {email, password} = state;

  return (
    <form onSubmit={handleSubmit} >
      <TextField value={email} onChange={handleChange} type='email' required name='email' label='Email' placeholder='Email@mail.com'/>
      <TextField value={password} onChange={handleChange} type='password' required name='password' label='Password' placeholder='6 simbols at least'/>
      <Button type='submit'>Login</Button>
    </form>
  );
};
export default LoginForm;
