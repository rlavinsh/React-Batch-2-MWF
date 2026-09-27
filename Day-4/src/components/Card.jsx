import React from "react";

const Card = () => {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1740252117044-2af197eea287?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="avatar"
      />
      <h2>Rahul</h2>
      <p>Fullstack developer</p>
      <button className="btn">View Profile</button>
    </div>
  );
};

export default Card;
