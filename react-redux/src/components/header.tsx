import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import detailsModeSlice from 'redux/slices/detailsModeSlice';

export function AppHeader() {
  const { detailsMode } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  return (
    <header className="header">
      {!detailsMode ? (
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
                  dispatch(detailsModeSlice.actions.detailsMode());
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
