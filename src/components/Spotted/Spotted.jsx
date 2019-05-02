import React from 'react';
import ToGo from '../toGo/toGo';

export default class Spotted extends React.Component {
    render() {
        return(
            <div id="location">
                <h1>Spotted</h1>
                <ToGo/>
            </div>
        )
    }
}