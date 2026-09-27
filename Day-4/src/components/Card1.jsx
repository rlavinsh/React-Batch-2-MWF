import React from "react";

const Card1 = () => {
  const name = "Ritik";
  const profile = "Frontend developer";

  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1740252117070-7aa2955b25f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
        alt="logo"
      />
      <h2>{name}</h2>
      <p>{profile}</p>
      <button className="btn">View Profile</button>
    </div>
  );
};

export default Card1;
