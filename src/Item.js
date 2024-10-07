import { Component } from "react";
export default class Item extends Component {
  state = {
    done: this.props.done,
  };

  onClick = () => {
    this.setState({ done: !this.state.done });
  };

  render() {
    let className;
    if (this.state.done) {
      className =
        "p-6 text-3xl transition border-b border-slate-100 hover:bg-blue-500 hover:text-white cursor-pointer bg-slate-200 text-slate-600 line-through";
    } else {
      className =
        "p-6 text-3xl transition border-b border-slate-100 hover:bg-blue-500 hover:text-white cursor-pointer bg-slate-200 text-slate-600 ";
    }
    return (
      <li className={className} onClick={this.onClick}>
        {this.props.children}
      </li>
    );
  }
}
