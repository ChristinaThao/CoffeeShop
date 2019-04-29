import React from 'react';
import './top.css';

export default class Top extends React.Component {
    render() {
        return(
                <div className="top" style={{backgroundImage: 'url(' + require('../../img/coffee-pour.jpg') + ')'}}>
                </div>
        )
    }
}