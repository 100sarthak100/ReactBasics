import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://media.istockphoto.com/id/1313644269/vector/gold-and-silver-circle-star-logo-template.jpg?s=1024x1024&w=is&k=20&c=Vh0SzhBl37QrZtL1RDLPiX2HvaZbUhTW79yBn0TlIQg="
        />
      </div>

      <div className="nav-items">
        <ul className="list">
          <li className="list-item">Home</li>
          <li className="list-item">About us</li>
          <li className="list-item">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
