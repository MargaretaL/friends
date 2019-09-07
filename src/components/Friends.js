import React, { Component } from 'react';
import FriendsList from './FriendsList';
import { createFragmentContainer, graphql } from 'react-relay';
import Thing from './Thing'

class Friends extends Component {
    
    render() {
        return(
            <div>
            <div className="navbar-fixed">
                <nav className="grey darken-4">
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo center">Friends</a>
                    </div>
                </nav>
            </div>
                <div>
                    <FriendsList viewer={this.props.viewer} />
                </div>
                <Thing viewer={this.props.viewer}/>
            </div>
        )
    }
}

export default createFragmentContainer(Friends, { // a fragment is a way to call a specific amount of data or specific items from graphql.
    viewer: graphql`
        fragment Friends_viewer on User {
            id,
            ...FriendsList_viewer,
            ...Thing_viewer
        }
    `,
});