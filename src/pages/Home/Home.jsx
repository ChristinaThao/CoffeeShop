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
                <div className="random random1"></div>
                <Gallery/>
                <div className="random random2"></div>
                <Spotted/>
            </div>
        )
    }
}