import React from 'react';
import PropTypes from 'prop-types';
import css from './contacts.module.css'



const ContactsList = ({ contacts, type, text, onClick }) => {

  const elements = contacts.map(({name, number, id}) =>  <li key={id} >
   
  {name}: {number} <button type={type} className={css.button} onClick={() => onClick(id)} >{text}</button>
</li>)
  return (
  <>
    <h2 >Contacts</h2>
    <ul className={css.list} >
      {elements}
    </ul>
  </>
)};



ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({ 
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })),
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ContactsList;