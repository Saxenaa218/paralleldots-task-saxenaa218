import React from 'react';
import { useHistory } from 'react-router';
import './Navbar.css';

interface NavItem {
    location: string;
    viewName: string;
}

const NAVBAR_ITEMS: NavItem[] = [
    {
        location: '/home',
        viewName: 'Home'
    },
    {
        location: '/image',
        viewName: 'Image'
    }
]

const Navbar: React.FC<{}> = () => {
    const history = useHistory();

    return (
        <header className="navbar">
            <div className="navbar--options">
                {NAVBAR_ITEMS.map((itm: NavItem) => <span className={itm.location === window.location.pathname ? "navbar--item navbar--active" : "navbar--item"} key={itm.location} onClick={() => history.push(itm.location)}>{itm.viewName}</span>)}
            </div>
        </header>
    );
}

export default Navbar;