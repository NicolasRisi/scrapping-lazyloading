import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import Widget from '../components/Widget';
import { uniqueId } from '../utils';

export default class Main extends Component {
  constructor() {
    super();

    const id = uniqueId();
    this.state = {
      arr: Array.apply(null, Array(30)).map((a, index) => {
        return {
          uniqueId: id
        };
      })
    };
  }

  handleClick() {
    const id = uniqueId();

    this.setState({
      arr: this.state.arr.map(el => {
        return {
          ...el,
          uniqueId: id
        };
      })
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="widget-list">
          {this.state.arr.map((el, index) => {
            return (
              <LazyLoad key={index} height={200} offset={[-100, 0]}>
                <Widget id={el.uniqueId} count={index + 1} />
              </LazyLoad>
            );
          })}
        </div>
      </div>
    );
  }
}