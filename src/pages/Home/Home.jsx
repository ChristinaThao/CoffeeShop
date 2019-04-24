import React from 'react';
import './Home.css';

export default class Home extends React.Component {
    render() {
        return(
            <div>
                <div className="top" style={{backgroundImage: 'url(' + require('../../img/bakery.jpg') + ')'}}>
                    <h1>Home</h1>
                </div>
                <div className="body">
                    <p>
                        qwerqwer
                    </p>
                </div>
            </div>
        )
    }
}