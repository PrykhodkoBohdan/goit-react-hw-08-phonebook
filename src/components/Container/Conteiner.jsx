import React from "react";
import PropTypes from 'prop-types';
import css from "./Container.module.css"

const Conteiner = ({title, children}) => (
  <div className={css.title}>
    <h1 className="">{title}</h1>
    {children}
  </div>
)

Conteiner.propTypes = {
  title: PropTypes.string.isRequired,
}
export default Conteiner;