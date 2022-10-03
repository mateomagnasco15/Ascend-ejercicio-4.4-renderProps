import React, { Component } from "react";

export default class Mouse extends Component<{ style?: React.CSSProperties }> {
  render() {
    return (
      <img
        style={this.props.style}
        width="150px"
        src="https://www.jax.org/-/media/0586DFC4D83842CCA60FDE459C567617.jpg"
        alt="Mouse"
      />
    );
  }
}

