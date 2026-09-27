import React from "react";

const Card = (props) => {
  //   console.log(props);

  return (
    <div className="card">
      <img src={props.imageUrl} alt="avatar" />
      <h2>{props.name}</h2>
      <p>{props.profile}</p>
      <button className="btn">{props.btnText}</button>
    </div>
  );
};

export default Card;
