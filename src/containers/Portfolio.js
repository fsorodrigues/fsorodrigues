import React, {Component} from 'react';
// import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Spinner from 'react-spinkit';

import {csvParse, autoType} from 'd3-dsv'

import PortfolioItem from '../components/PortfolioItem';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.fetchItems();
    }

    fetchItems() {
        fetch('/data/stories.csv')
            .then(res => res.text())
            .then(text => csvParse(text, autoType))
            .then(json => json.sort((a,b) => a.tier - b.tier))
            .then(data => this.setState({data}));
    }

    renderItems() {
    
        return this.state.data.map(d => {
            return (
                <PortfolioItem key={d.slug} data={d} />
            );
        });
    }

    render() {
        this.state.data
        if (!this.state.data) {

            return(
                <div className={"portfolio"}>
                    <p>{"Oh, the perks of free accounts... I promise my code works, alright?"}</p>
                    <Spinner name="pacman" />
                    <p>{"Cut me a little slack this time and wait for Heroku to initialize my API. It takes less than 30 seconds."}</p>
                </div>

            );

        }
        else {

            return(
                <div className={"portfolio"}>
                    {this.renderItems()}
                </div>
            );
        }

    }

}

export default Portfolio;
