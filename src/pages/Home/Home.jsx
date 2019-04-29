import React from 'react';
import './Home.css';
import Top from '../../components/top/top';
import Drinks from '../Drinks/Drinks';


export default class Home extends React.Component {
    render() {
        return(
            <div>
                <Top/>
                <Drinks/>
            </div>
        )
    }
}