import React from 'react';
import {Link}  from 'react-router-dom';
import './nav.css';

export default class Nav extends React.Component {
    render() {
        return (
            <div style={{display:"flex"}}>
                <div className="nav left">
                    <Link to="/">Coffee</Link>
                </div>
                <div className="nav right">
                    <Link to="/menu" className="option">Menu</Link>
                    <Link to="/reservation" className="option">Reservation</Link>
                    <Link to="/shop" className="option">Shop</Link>
                </div>
            </div>
        )
    }
}