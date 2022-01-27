import React from "react";
import "./App.css";
import Listitem from "./Listitem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItems: {
        id: "",
        text: "",
        isCompleted: false,
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItems = this.addItems.bind(this);
    this.deleteItems = this.deleteItems.bind(this);
    this.UpdateState = this.UpdateState.bind(this);
  }
  handleInput(e) {
    this.setState({
      currentItems: {
        id: "",
        text: e.target.value,
        isCompleted: false,
      },
    });
  }
  addItems(e) {
    e.preventDefault();
    // const newItem = this.state.currentItems;
    const newItem = {
      id: Math.random(),
      text: this.state.currentItems.text,
      isCompleted: false,
    };
    // console.log(newItem);
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItems: {
          id: "",
          text: "",
          isCompleted: false,
        },
      });
    }
  }
  deleteItems(key) {
    const filterItems = this.state.items.filter((item) => item.text !== key);
    this.setState({ items: filterItems });
  }
  UpdateState(item) {
    const newItem = item;
    newItem.isCompleted = true;
    // console.log(item);
    this.setState({ newItem });
  }
  render() {
    return (
      <form className="container" onSubmit={this.addItems}>
        <h1 className="heading">TODO LIST </h1>
        <div className="input">
          <input
            className="inputfield"
            type="text"
            value={this.state.currentItems.text}
            onChange={this.handleInput}
          />
          <button className="addbtn">+</button>
        </div>
        <Listitem
          items={this.state.items}
          deleteItems={this.deleteItems}
          UpdateState={this.UpdateState}
        />
      </form>
    );
  }
}

export default App;
