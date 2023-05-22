import React, { Component } from 'react';

interface WatchState {
  time: string;
  intervalID: NodeJS.Timeout | null;
}

class Watch extends Component<{}, WatchState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      intervalID: null,
    };
  }

  componentDidMount() {
    const intervalID = setInterval(() => this.updateTime(), 1000);
    this.setState({ intervalID });
  }

  componentWillUnmount() {
    const { intervalID } = this.state;
    if (intervalID) {
      clearInterval(intervalID);
    }
  }

  updateTime() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }

  render() {
    return <div className="watch">{this.state.time}</div>;
  }
}

export default Watch;
