import React, {Component} from 'react';
// import {Redirect} from 'react-router-dom';

import Tabs from './Tabs';
import Main from '../components/Main';
import Social from '../components/Social';

class Site extends Component {
    render() {
        // console.log(this.props)
        return(
            <div className={"entry-content col-12 col-sm-10 col-md-8 col-lg-6 mb-5"}>
                <Main />
                <Tabs match={this.props.match}/>
                {/* <Social /> */}
            </div>
        );
    }

}

export default Site;
