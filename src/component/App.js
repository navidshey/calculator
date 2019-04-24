import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      history: null
    };
  }

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
    this.updateHistory(buttonName);
  };

  updateHistory = (buttonName) => {
    const update = this.state;

    if (update.history === "-" && update.total)
      update.history = update.total;

    if (buttonName === "=") {
      update.history = "-";
    }
    else if (buttonName === "AC") {
      update.history = "";
    }
    else {
      update.history = (update.history ? update.history : "").concat(isNaN(buttonName) && buttonName!=="." ? " " + buttonName+" " : buttonName);
    }
    this.setState({ update });
  }


  render() {
    return (
      <div className="component-app" >
        <Display value={this.state.next || this.state.total || "0"} history={this.state.history === "-" ? this.state.next || this.state.total || "0" : this.state.history} />
        <ButtonPanel clickHandler={this.handleClick} clickedItem ={this.state.next} />
      </div>
    );
  }
}
export default App;
