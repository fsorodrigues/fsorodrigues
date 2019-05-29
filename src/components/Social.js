import React, {Component} from 'react';
// import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


class Social extends Component {

    render() {
        return(
            <div className={"footer-container mt-5"}>
                <ul className={"list-group list-group-horizontal justify-content-around border-top"}>
                    <li className={"list-group-item"} >
                        <h3><FontAwesomeIcon icon={['fab', 'twitter']} /></h3>
                    </li>
                    <li className={"list-group-item"}>
                        <h3><FontAwesomeIcon icon={['fab', 'github']} /></h3>
                    </li>
                </ul>
            </div>

        );
    }

}

export default Social;

// style={{width:"50%"}}
