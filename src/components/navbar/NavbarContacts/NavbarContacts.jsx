import css from '../NavbarAuth/navbar.module.css'
import { NavLink } from 'react-router-dom';

const isActive = ({isActive}) => {
  return isActive ? `${css.list} ${css.active}` : css.list;
}
const NavbarContacts = () => {
  return (
    <ul className={css.group}>
      <NavLink to="/contacts" className={isActive}>Contacts</NavLink>
    </ul>
  );
};

export default NavbarContacts;