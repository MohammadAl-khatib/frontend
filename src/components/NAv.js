import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";

class NAv extends Component {
  render() {
    return (
      <div id="nav">
        {console.log(this.props.auth0.isAuthenticated)}
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            {this.props.auth0.isAuthenticated && <Link to="/favs">Favs</Link>}
          </li>
        </ul>
      </div>
    );
  }
}

export default withAuth0(NAv);
