import React, {Component} from 'react';
// import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class PortfolioItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderTags() {
        return this.props.data.tags.split('||').map(d => {
            return (
                <code key={d} className={"p-1 rounded-lg ms-1 tag"}>{d}</code>
            );
        });
    }

    render() {
        const imgStyle = {
            background:`url(./media/${this.props.data.slug}.png)`,
            backgroundSize:"cover"
        };

        const url = this.props.data.url;

        return(
            <div className={"d-flex portfolio-item mb-4"}>
                <a href={url} target="_blank">
                    <div className={"thumb-container mr-3"}>
                        <div className={"img-container rounded-lg"} style={imgStyle}></div>
                    </div>
                </a>
                <div>
                    <h6 className="badge badge-custom">{this.props.data.publication}</h6>
                    <a href={url}>
                        <h6>{this.props.data.title}</h6>
                    </a>
                    <p>{this.props.data.description}</p>
                    <div className={"mb-4"}>
                        {this.renderTags()}
                    </div>
                </div>
            </div>

        );
    }

}

export default PortfolioItem;
