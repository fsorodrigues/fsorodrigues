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
            .then(json => this.setState({"data":json.data[0].text}));
    }

    renderItems() {
        console.log(this.state.data);
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

// <p>{"Before getting into journalism, I was a law student who unhealthy amounts about sports. That's what led me into this career. From 2011 to 2016, I worked as a sports reporter, and sports PR & MKT professional in Brazil, where I'm originally from. I also worked at two FIFA World Cups, 2014 and 2018, both the most fun I've ever had."}</p>
// <p>{"In 2016, I moved to the US for grad school, and attended the Media Innovation Masters at Northeastern University in Boston. My focus in the program was on data & information design for digital and print media."}</p>
// <p>{"That's when I took my first JavaScript steps. I barely knew what a library really meant, but D3.js was my gateway to coding and, eventually, to the wild realm of Node, NPM, modules and frameworks. If I had to label myself, I'd say I'm on the MERN stack — is that still a thing these days???"}</p>
// <p>{"I also picked up some other tricks along the way: Python, bash scripting, GIS, Adobe Suite, REST APIs, web-crawling, and — don't tell Python I said that — R."}</p>
// <p>{"I'm passionate about a bunch of things, sports still topping that list. Over time, doing data and visual journalism, I realized I also loved learning new things, tools, (programming) languages."}</p>
// <p>{"Some other things I care about: craft brews and ciders, clean CSVs, animals, JSON, anything David Foster Wallace, and book covers with that light coarse, grainy feeling to it."}</p>
