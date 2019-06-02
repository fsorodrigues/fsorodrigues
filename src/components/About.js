import React, {Component} from 'react';
// import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.fetchItems();
    }

    fetchItems() {
        fetch('https://mysterious-sands-79444.herokuapp.com/api/search/about')
            .then(res => res.json())
            .then(json => this.setState({"data":json.data.filter(d => d.section === 'about-me')[0].text}));
    }

    renderItems() {
        return this.state.data.map((d,i) => {
            return (
                <p key={i}>{d}</p>
            );
        });
    }

    render() {
        if (!this.state.data) {

            return(
                <div className={"about-container"}>
                    <p>{"loading..."}</p>
                </div>

            );

        } else {

            return(
                <div className={"about-container"}>
                    {this.renderItems()}
                </div>
            );
        }
    }

}

export default About;
