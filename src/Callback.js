import React, { Component } from "react";

class Callback extends Component {
  componentDidMount() {
    if (/access_token|id_token|error/.test(this.props.location.hash)) {
      this.props.auth.handleAuthentication();
    } else {
      throw new ErrorEvent("invalid callback error");
    }
  }

  render() {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
}

export default Callback;
