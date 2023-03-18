import css from "../Forms/Forms.module.css"

const Button = ({children, type = 'submit'}) => {
  return <button className={css.button} type={type}>{children}</button>
}

export default Button;