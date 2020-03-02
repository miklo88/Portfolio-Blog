import React, { Component } from "react";

export default class AddGuest extends Component {
  render() {
    return (
      <div className='Guest-Profile'>
        <input type='text' ref='input' />
        <input type='text' ref='input' />

        <button onClick={e => this.handleClick(e)}>Add</button>
        <p>Beinvenidos!</p>
      </div>
    );
  }

  handleClick(e) {
    const node = this.refs.input;
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = "";
  }
}
