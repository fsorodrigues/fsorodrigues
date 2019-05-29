import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import NavLink from '../components/NavLink';
import Portfolio from './Portfolio';
import About from '../components/About';

class Tabs extends Component {

    render() {
        return(
            <div className={"tabs-container"}>
                <nav className="mb-4">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <NavLink to="/home" exact={true}>My work</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/home/about-me">More about me</NavLink>
                        </li>
                    </ul>
                </nav>
                <Route path={`${this.props.match.path}`} exact component={Portfolio}/>
                <Route path={`${this.props.match.path}/about-me`} component={About}/>
            </div>
        );
    }

}

export default Tabs;
