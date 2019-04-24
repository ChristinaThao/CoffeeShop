import React from 'react';
import {Link}  from 'react-router-dom';
import './nav.css';

export default class Nav extends React.Component {
    render() {
        return (
            <div>
                <div className="nav left">
                    <Link to="/">Coffee</Link>
                </div>
                <div className="nav middle">
                    <Link to="/menu" className="option">Menu</Link>
                    <Link to="/location" className="option">Location</Link>
                </div>
                <div className="nav right"></div>
            </div>
        )
    }
}