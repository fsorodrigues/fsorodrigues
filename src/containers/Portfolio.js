import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Spinner from 'react-spinkit';

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
        fetch('https://mysterious-sands-79444.herokuapp.com/api/search/stories')
            .then(res => res.json())
            .then(json => json.data.sort((a,b) => a.tier - b.tier))
            .then(data => this.setState({"data":data}));
    }

    renderItems() {
        return this.state.data.map(d => {
            return (
                <PortfolioItem key={d.slug} data={d}/>
            );
        });
    }

    render() {

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
