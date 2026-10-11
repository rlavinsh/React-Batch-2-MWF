import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-code">404</h1>

        <div className="notfound-divider"></div>

        <h2>Oops! Page Not Found</h2>

        <p>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <Link to="/" className="notfound-button">
          <span aria-hidden="true">←</span> Back to Home
        </Link>

        {/* <a href="/" className="notfound-button">
          <span aria-hidden="true">←</span> Back to Home
        </a> */}

        <span className="notfound-footer">Error 404 • Page Not Found</span>
      </div>
    </div>
  );
};

export default NotFound;
