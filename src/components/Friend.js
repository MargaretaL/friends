import React, { Component } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

class Friend extends Component {
    render() {
        return(
            <li className="col l6 s12">
                <div className="card">
                    <div className="card-image">
                        <img src={this.props.Friend.image} alt={this.props.Friend.firstName}/>
                        <span className="card-title">{this.props.Friend.firstName} {this.props.Friend.lastName}</span>
                    </div>
                    <div className="card-content">
                        <div className="row">
                            <div className="col l6 center">
                                <blockquote>Is a {this.props.Friend.gender}</blockquote>
                            </div>
                            <div className="col l6 center">
                                <blockquote>Speaks {this.props.Friend.language}</blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <a href={"mailto:" + this.props.Friend.email} target="_blank">Email: {this.props.Friend.email}</a>
                    </div>
                </div>
            </li>
        )
    }
}

export default createFragmentContainer(Friend, {
    Friend: graphql`
        fragment Friend_Friend on Friend {
            id,
            firstName,
            lastName,
            gender,
            language,
            email,
            image,
        }
    `,
    viewer: graphql`
        fragment Friend_viewer on User {
            id,
        }
    `,
});