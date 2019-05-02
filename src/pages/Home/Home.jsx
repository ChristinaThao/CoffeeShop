import React from 'react';
import Top from '../../components/top/top';
import Drinks from '../../components/Drinks/Drinks';
import Preferences from '../../components/Preferences/Preferences';
import Spotted from '../../components/Spotted/Spotted';

import './Home.css';

export default class Home extends React.Component {
    render() {
        return(
            <div style={{marginBottom:"1em"}}>
                <Top/>
                <Preferences/>
                <Drinks/>
                <Spotted/>
            </div>
        )
    }
}