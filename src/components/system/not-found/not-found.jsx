import React from 'react';
import "./not-found.css"
import { Link } from 'react-router-dom';

class NotFound extends React.Component {
  render() {
    return (
      <div id="notfound">
        <div class="notfound">
          <div class="notfound-404">
            <h1>Oops!</h1>
            <h2>404 - The Page can't be found</h2>
          </div>
          <Link to="/" className="back-btn">Go to site</Link>
        </div>
      </div>
    )
  }
}

export default NotFound