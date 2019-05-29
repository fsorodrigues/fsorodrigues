import React, {Component} from 'react';
// import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

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
            .then(json => this.setState({"data":json.data}));
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
                    <p>{"Oh the perks of a free Heroku account. Cut me a little slack this time while it loads, alright?."}</p>
                </div>

            );

        } else {

            return(
                <div className={"portfolio"}>
                    {this.renderItems()}
                </div>
            );
        }

    }

}

export default Portfolio;
