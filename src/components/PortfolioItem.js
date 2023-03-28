import React, {Component} from 'react';
// import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons'

class PortfolioItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderTags() {
        return this.props.data.tags.split('||').map(d => {
            return (
                <code key={d} className={"p-1 rounded-1 tag"}>{d}</code>
            );
        });
    }

    render() {
        const imgStyle = {
            background:`url(./media/${this.props.data.slug}.png), url(./media/${this.props.data.slug}.jpg)`,
            backgroundSize:"cover"
        };

        const url = this.props.data.url;

        return(
            <div className={"d-flex portfolio-item mb-4"}>
                <a href={url} target="_blank">
                    <div className={"thumb-container mr-3"}>
                        <div className={"img-container rounded-3"} style={imgStyle}></div>
                    </div>
                </a>
                <div>
                    <h6 className="badge rounded-pill badge-custom">{this.props.data.publication}</h6>
                    <a href={url}>
                        <h6>{this.props.data.title}</h6>
                    </a>
                    <p>{this.props.data.description}</p>
                    <div className={"mb-4 d-inline-flex flex-wrap tagline"}>
                        {this.renderTags()}
                        {
                            this.props.data.awards && 
                            <code className="p-1 rounded-1 tag tag-reverse">
                                <FontAwesomeIcon icon={faTrophy} /> {this.props.data.awards}
                            </code>
                        }
                    </div>
                </div>
            </div>

        );
    }

}

export default PortfolioItem;
