import React from 'react';
import Gallery from '../../components/Gallery/gallery';
import Fact from '../../components/Facts/Fact';

import './Home.css';

export default class Home extends React.Component {

    render() {
        const facts = [
            {
                title: "Coffee drinkers tend to live longer",
                description: "According to a Harvard study, moderate consumption of coffee (~3 cups) a day can reduce the risk of cardio vascular disease, type 2 diabetes and Parkinson's"
            },
            {
                title: "One cup of black coffee only has one calorie",
                description: "But adding cream, milk and sugar will quickly escalade those numbers"
            }
        ]
        
        return(
            <div style={{marginTop: "100vh"}}>
                <Fact fact={facts[0].title} description = {facts[0].description}/>
                <div className="random random1"></div>
                <Fact fact={facts[1].title} description = {facts[1].description}/>
                <Gallery/>
                <div className="random random2"></div>
            </div>
        )
    }
}