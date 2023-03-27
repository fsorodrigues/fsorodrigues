import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Link extends Component {

    render() {
        return (
            <NavLink {...this.props} className={({isActive}) => (isActive ? "nav-link active" : "nav-link")} />
        );
  }
}

export default Link;
