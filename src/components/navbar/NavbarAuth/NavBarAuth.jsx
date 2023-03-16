
import css from './navbar.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import items from './items';

import { isUserLogin } from 'redux/auth/auth-selectors';

import NavbarUser from '../NavbarUser/NavbarUser';

const isActive = ({ isActive }) => {
  return isActive ? `${css.list} ${css.active}` : css.list;
};
const NavBarAuth = () => {
  const isLogin = useSelector(isUserLogin);
console.log(items)
  const filteredItems = !isLogin
    ? items.filter(( item) => {
      console.log(item.private)
      return !item.private})
    : items.filter(( item ) => item.private);
  const elements = filteredItems.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink to={link} className={isActive}>
        {text}
      </NavLink>
    </li>
  ));
  return (
    <>
      {!isLogin && <ul className={css.group}>{elements} </ul>}
      {isLogin && <div className={css.wrapper}><ul className={css.group}>{elements} </ul> <NavbarUser/></div>}
    </>
  );
};

export default NavBarAuth;
