import React from "react";

import "./Button.css";

const Button = (props) => {
  const classes = `button ${props.className}`;
  return <button className={classes}>{props.children}</button>;
};

export default Button;
