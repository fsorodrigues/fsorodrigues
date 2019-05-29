import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

import Site from './Site';
import Admin from '../components/Admin';

class App extends Component {

    render() {
        // console.log(process.env);
        return(
            <div className={"row d-flex flex-column align-items-center"}>
                <Route path="/" exact render={() => <Redirect to="/home" />}/>
                <Route path="/home" component={Site}/>
                <Route path="/admin" component={Admin}/>
            </div>

        );
    }

}

export default App;
