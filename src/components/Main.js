import React, {Component} from 'react';
// import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

// import Tabs from '../containers/Tabs';
// import Social from '../components/Social';

class Main extends Component {

    render() {
        // console.log(process.env);
        return(
            <div className={"main-container"}>
                <p className={"mb-4"}>
                    {"Hi! I'm "}<strong>{"Felippe Rodrigues"}</strong>{". I use "}<code className={"p-1 rounded-lg"}>{"data"}</code>{" and "}<code className={"p-1 rounded-lg"}>{"code"}</code>{" to make journalism."}
                </p>
                <p className={"mb-4"}>
                    {"I currently work at "}<a href={"https://www.vtdigger.org"}>{"VTDigger.org"}</a>{" as a visual journalist. I'm a front-end developer and data geek too. My reporting and graphics can also be seen on "}<a href={"https://www.politifact.com"}>{"PolitiFact"}</a>, <a href={"https://www.insideclimatenews.org/"}>{"InsideClimate News"}</a>, <a href={"https://www.smithsonianmag.com/"}>{"Smithsonian Mag"}</a>{", among others."}
                </p>
            </div>
        );
    }

}

export default Main;

// <span className="text-muted">/fsorodrigues</span>
