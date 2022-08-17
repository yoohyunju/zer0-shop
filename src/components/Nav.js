import React from "react";

function Nav() {
  return (
    <header className="header">
      <div className="header-title">
        <img className="header-title__logo" alt="zero shop" />
      </div>

      <nav className="navbar">
        <ul className="nav__menu">
          <li className="header-nav__item">
            <a href="" className="header-nav__near-shop">
              가까운 매장 찾기
            </a>
          </li>
          <li className="header-nav__item">
            <a href="" className="header-nav__login">
              login
            </a>
          </li>
          <li className="header-nav__item">
            <a href="" className="header-nav__cart">
              쇼핑 카트
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
