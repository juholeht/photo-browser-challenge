import React from 'react';
import { Link } from 'react-router-dom';

const SidebarMenu = () => {
  return (
    <>
      <div className={"menu-list-container"}>
        <div className="menu-list">
          <Link to="/" className="menu-item">
            <div className="menu-item__title">Photos</div>
          </Link>
          <Link to="/albums" className="menu-item">
            <div className="menu-item__title">Albums</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;
