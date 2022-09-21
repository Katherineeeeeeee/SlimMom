import { NavLink } from 'react-router-dom';

import './burger.scss';

export default function Burger() {
  function openMenu(e) {
    e.preventDefault();
    if (e.target.nodeName === 'NAV') {
      return;
    }
    e.currentTarget.classList.toggle('burger-menu_active');
  }

  return (
    <>
      <div className="burger-menu" onClick={openMenu}>
        <span className="burger-menu_button">
          <span className="burger-menu_lines"></span>
        </span>
        <nav className="burger-menu_nav">
          <NavLink className="burger-menu_link" to="/dairy">
            dairy
          </NavLink>
          <NavLink className="burger-menu_link" to="/calculator-calories">
            calculator
          </NavLink>
        </nav>
      </div>
    </>
  );
}
