import { Component } from "react";
import Item from "./Item";
export default class Todo extends Component {
  state = { list: [{ text: "do something", done: false }], text: "" };
  onChange = (e) => {
    this.setState({ text: e.target.value });
  };
  _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
      this.state.list.push({ text: e.target.value });
      const list = this.state.list;
      this.setState({ list, text: "" });
    }
  };
  render() {
    return (
      <div className="min-h-screen w-full bg-slate-100 flex justify-center items-center">
        <div className="bg-white flex-1 max-w-md rounded-xl shadow-xl overflow-hidden">
          <input
            type="text"
            className="bg-slate-600 text-white p-6 w-full outline-none text-3xl"
            placeholder="Type something..."
            onKeyDown={this._handleKeyDown}
            onChange={this.onChange}
            value={this.state.text}
          />
          <ul>
            {this.state.list.map((item) => {
              return (
                <Item key={item.id} done={item.done}>
                  {item.text}
                </Item>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
