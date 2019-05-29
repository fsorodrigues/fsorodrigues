import React, {Component} from 'react';
// import {Redirect} from 'react-router-dom';

import Tabs from './Tabs';
import Main from '../components/Main';
import Social from '../components/Social';

class Site extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         "redirect": this.props.redirect
    //     };
    // }
    //
    // componentDidMount() {
    //     this.checkPath();
    // }
    //
    // checkPath() {
    //     if (!this.state.redirect) {
    //         this.setState({
    //             "redirect": this.props.path === "/"
    //         });
    //     }
    // }

    render() {
        return(
            <div className={"entry-content col-12 col-sm-10 col-md-8 col-lg-6 mb-5"}>
                <Main />
                <Tabs match={this.props.match}/>
                <Social />
            </div>
        );
    }

}

export default Site;

// <span className="text-muted">/fsorodrigues</span>
