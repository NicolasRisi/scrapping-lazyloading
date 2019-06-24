import React, {Component} from 'react';

class Widget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isReady: true,
      count: 1
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.id && this.props.id) {
      this.setState({
        isReady: false
      });

      setTimeout(() => {
        this.setState({
          isReady: true,
          count: this.state.count + 1
        });
      }, 500);
    } else {
      this.setState({
        isReady: true
      });
    }
  }

  render() {
    return this.state.isReady ? (
      <div className="widget">
        <span className="widget-counter">{this.props.count}</span>
          <div className="widget-text widget-title">
              Scrap Title {this.props.count}
          </div>
      </div>
    ) : (
      <div className="widget loading">
        loading...
      </div>
    );
  }
}

export default Widget;