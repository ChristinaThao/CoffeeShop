import React from 'react';
import Gallery from '../../components/Gallery/gallery';
import Preferences from '../../components/Preferences/Preferences';
import Spotted from '../../components/Spotted/Spotted';

import './Home.css';

export default class Home extends React.Component {
    render() {
        return(
            <div style={{marginBottom:"1em"}}>
                <Preferences/>
                <div style={{backgroundImage: 'url(' + require('../../img/brunch.jpg') + ')'}} className="random"></div>
                <Gallery/>
                <div style={{backgroundImage: 'url(' + require('../../img/macaron.jpg') + ')'}} className="random"></div>
                <Spotted/>
            </div>
        )
    }
}