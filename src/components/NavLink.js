import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Link extends Component {

    render() {
        return (
            <NavLink {...this.props} className="nav-link" activeClassName="active"/>
        );
  }
}

export default Link;
