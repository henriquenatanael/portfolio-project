import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem link='/burger-king' active>Burger King</NavigationItem>
    </ul>
);

export default navigationItems;