import React from "react";

const Image = props => {
  return (
    <div>
    <img
      className="img_logo"
      src={props.image}
      style={props.style}
    />
  </div>
  );
}

export default Image;