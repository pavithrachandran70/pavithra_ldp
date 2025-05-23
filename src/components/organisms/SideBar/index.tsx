import React from 'react';
import Logo from '../../molecules/Logo';
import SidebarItem from '../../molecules/Menu';
import "../../organisms/SideBar/index.css"
import image from "../../../assets/home.svg"
import cash from "../../../assets/cash.svg"
import watch from "../../../assets/watch.svg"


const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <Logo />
      <nav className="menu">
        <SidebarItem
          icon={ image}
          label="Home"
        />
        <SidebarItem
          icon={
    cash
          }
          label="Cash Acceleration"
        />
      </nav>
      <SidebarItem
        className="bottom"
        icon={
           watch
            
        }
        label="Watch how to"
      />
    </div>
  );
};

export default Sidebar;
