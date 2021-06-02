import React from "react";

const Header = ({ name, value, isSpecial }) => {
  const style = {
    backgroundColor: "green",
    color: "white",
    fontSize: "30px",
    width: "1920px",
    height: "1em",
  };
  return (
    <div style={style}>
      {isSpecial ? "*" : "@@"}
      {name} // {value} // {name}
    </div>
  );
};

Header.defaultProps = {
  isSpecial: false,
};

export default Header;
