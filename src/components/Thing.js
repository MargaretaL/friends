
import React, { Component } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

class Thing extends Component {


    render() {
        console.log('hi : ' + this.props.viewer && this.props.viewer)

        return (
            <div>
                <div className="navbar-fixed">
                    <nav className="grey darken-4">
                        <div className="nav-wrapper">
                            <a href="#" className="brand-logo center">Friends</a>
                        </div>
                    </nav>
                </div>
                <div>
                    hej{this.props.viewer && this.props.viewer.id}


                    {this.props.viewer && this.props.viewer.friends.edges.map(fn => {
                        return <div>
                            <div>{fn.node.firstName}</div>
                        </div>
                    }
                    )
                    }
                </div>
            </div>
        )
    }
}

export default createFragmentContainer(Thing, { // a fragment is a way to call a specific amount of data or specific items from graphql.
    viewer: graphql`
        fragment Thing_viewer on User {
            id,
            friends {
                edges {
                    node {
                        id,
                        firstName
                    },
                },
            },
            id,
            ...Friend_viewer,
        }
    `,
});