import css from './navbarUser.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';

const NavbarUser = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  }
  const {name, email} = useSelector(getUser);

  return (
    <div className={css.wrapper}>
      <h2 className={css.name}>{name}, {email}</h2><button onClick={onLogout} className={css.button}>Logout</button>
    </div>
  )
}

export default NavbarUser;