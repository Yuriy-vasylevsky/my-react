import './Navigation.scss';
import { NavLink } from 'react-router-dom';
import React from 'react';

export default function Navigation() {
  return (
    <>
      <div className="register">
        <NavLink to="/home" className="link nav-link">
          home
        </NavLink>
      </div>
    </>
  );
}
