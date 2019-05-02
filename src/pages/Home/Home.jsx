import React from 'react';
import './Home.css';
import Top from '../../components/top/top';
import Drinks from '../../components/Drinks/Drinks';
import Preferences from '../../components/Preferences/Preferences';
import Spotted from '../../components/Spotted/Spotted';


export default class Home extends React.Component {
    render() {
        return(
            <div>
                <Top/>
                <Preferences/>
                <Drinks/>
                <Spotted/>
            </div>
        )
    }
}