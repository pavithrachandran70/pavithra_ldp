import React from 'react';
import Logo from '../../molecules/Logo';
import SidebarItem from '../../molecules/Menu';
import "../../organisms/SideBar/index.css"

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <Logo />
      <nav className="menu">
        <SidebarItem
          icon={
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 12.5V10.5" stroke="#D4D2DE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.71318 2.37998L2.09318 6.07998C1.57318 6.49331 1.23985 7.36665 1.35318 8.01998L2.23985 13.3266C2.39985 14.2733 3.30652 15.04 4.26652 15.04H11.7332C12.6865 15.04 13.5999 14.2666 13.7599 13.3266L14.6465 8.01998C14.7532 7.36665 14.4199 6.49331 13.9065 6.07998L9.28652 2.38665C8.57318 1.81331 7.41985 1.81331 6.71318 2.37998Z" stroke="#D4D2DE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

           
          }
          label="Home"
        />
        <SidebarItem
          icon={
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.3335 8.10005C5.3335 8.61338 5.7335 9.03338 6.22016 9.03338H7.22016C7.64683 9.03338 7.9935 8.66672 7.9935 8.22005C7.9935 7.73338 7.78016 7.56005 7.46683 7.44672L5.86683 6.88672C5.54683 6.77338 5.3335 6.60005 5.3335 6.11338C5.3335 5.66672 5.68016 5.30005 6.10683 5.30005H7.10683C7.60016 5.30672 8.00016 5.72005 8.00016 6.23338" stroke="#727080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.6665 9.06665V9.55998" stroke="#727080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.6665 4.77344V5.29344" stroke="#727080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66016 12.4866C9.602 12.4866 11.9868 10.1018 11.9868 7.15992C11.9868 4.21808 9.602 1.83325 6.66016 1.83325C3.71833 1.83325 1.3335 4.21808 1.3335 7.15992C1.3335 10.1018 3.71833 12.4866 6.66016 12.4866Z" stroke="#727080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.65332 13.7534C9.25332 14.6001 10.2333 15.1534 11.3533 15.1534C13.1733 15.1534 14.6533 13.6734 14.6533 11.8534C14.6533 10.7467 14.1067 9.76675 13.2733 9.16675" stroke="#727080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          }
          label="Cash Acceleration"
        />
      </nav>
      <SidebarItem
        className="bottom"
        icon={
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.06023 9.35335H6.12023V14.1533C6.12023 15.2733 6.7269 15.5 7.4669 14.66L12.5136 8.92668C13.1336 8.22668 12.8736 7.64668 11.9336 7.64668H9.87356V2.84668C9.87356 1.72668 9.2669 1.50001 8.5269 2.34001L3.48023 8.07335C2.8669 8.78001 3.1269 9.35335 4.06023 9.35335Z" stroke="#727080" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
        }
        label="Watch how to"
      />
    </div>
  );
};

export default Sidebar;
