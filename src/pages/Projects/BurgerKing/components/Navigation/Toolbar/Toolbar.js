import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className="Toolbar">
        <DrawerToggle clicked={props.drawerToggledClicked}/>
        <div className="Logo">
            <Logo />
        </div>
        <nav className="DesktopOnly">
            <ul>
                <NavigationItems />
            </ul>
        </nav>
    </header>
);

export default toolbar;
