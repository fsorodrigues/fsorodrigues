import React, {Component} from 'react';
import { Route, Routes} from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Site from './Site';
import Admin from '../components/Admin';

class App extends Component {

    render() {
        return(
            <div className={"row d-flex flex-column align-items-center"}>
                <Routes>
                    <Route path="/" exact={"true"} element={ <Navigate to="/home" />}/>
                    <Route path="/home/*" element={ <Site /> }/>
                </Routes>
                
                
            </div>

        );
    }

}

export default App;
