import { useMemo } from 'react';
import { nanoid } from 'nanoid';

import css from './textFiled.module.css'

const TextField = ({label, handleChange, ...props}) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <div >
      <label className={css.label} htmlFor={id} >{label}</label>
      <input className={css.input}  id={id} onChange={handleChange} {...props}  />
    </div>
  )
}

export default TextField;