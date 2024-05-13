import { AppContext } from 'context';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Types } from 'reducers';

export function AppHeader() {
  const { state, dispatch } = useContext(AppContext);
  return (
    <header className="header">
      {!state.detailsMode ? (
        <nav>
          <ul className="menu">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="join"
                className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}
              >
                Join
              </NavLink>
            </li>
          </ul>
        </nav>
      ) : (
        <nav>
          <ul className="menu">
            <li>
              <NavLink
                to="/"
                className="menu-link"
                onClick={() => {
                  dispatch({
                    type: Types.Details,
                  });
                }}
                end
              >
                &lt;&lt;Back
              </NavLink>
            </li>
            <li>
              <NavLink to="details" className="menu-link">
                Details
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
