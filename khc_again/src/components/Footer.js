import React from "react";

const Footer = () => {
  const name = "this is Feader..!, name값에 따라 변경됨.";
  const style = {
    backgroundColor: "yellow",
    color: "black",
    fontSize: "30px",
    width: "1920px",
    height: "1em",
  };
  return <div style={style}>{name}</div>;
};

export default Footer;
