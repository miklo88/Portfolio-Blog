import React from "react";
import "../styles/Clock.scss";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <p className='P-Title'>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}
export default Clock;
