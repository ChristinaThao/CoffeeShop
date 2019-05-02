import React from 'react';
import './Preferences.css';

export default class Preferences extends React.Component {
    render() {
        return(
            <div id="preferences"style={{marginTop:"100vh", width:"100%"}}>
                <h1 style={{zIndex:5}}>My Caffeine Addiction</h1>
                <div style={{border:"1px brown solid", marginLeft:"2em", marginRight:"2em", height: "40vh", zIndex:0}}></div>
            </div>
        )
    }
}