import React from 'react';
import { useHistory } from 'react-router';
import './Navbar.css';

const Navbar: React.FC<any> = () => {
    const history = useHistory();
    return (
        <header className="navbar">
            <div>
                <button onClick={() => history.push('/home')}>Home</button>
                <button onClick={() => history.push('/image')}>Image</button>
            </div>
        </header>
    );
}

export default Navbar;