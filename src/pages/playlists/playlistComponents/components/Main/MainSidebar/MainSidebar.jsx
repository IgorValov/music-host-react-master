import React from 'react';

import SidebarPersonal from './SidebarPersonal/SidebarPersonal';
import { StyledMainSideBar } from './StyledMainSideBar';

function MainSidebar() {
    return (
        <StyledMainSideBar>
            <SidebarPersonal />
        </StyledMainSideBar>
    );
}

export default MainSidebar;
