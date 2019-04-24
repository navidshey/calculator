import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "./ButtonPanel.css";

class ButtonPanel extends React.Component {

  constructor(props){
    super(props);
    this.state = {clickedItem: ""};
    this.acBtn = React.createRef();
  }

  handleClick = buttonName => {
    this.acBtn.current.focus(); 
    this.props.clickHandler(buttonName);
    this.state.clickedItem = this.props.clickedItem ? this.props.clickedItem : buttonName;
  };

  componentDidMount(){
    if(this.acBtn.current)
      this.acBtn.current.focus(); 
 }

   handelKeyPress = event => {
    if (event.charCode >= 48 && event.charCode <= 57 && event.charCode != 13) {
      this.handleClick(event.key);
    }

    switch (event.charCode) {
      case 27: { return this.handleClick("AC"); }
      case 61: { return this.handleClick("="); } 
      case 43:
      case 47:
      case 45:
      case 37: { return this.handleClick(event.key); }
      case 42: { return this.handleClick("x"); }
      case 46: { return this.handleClick("."); }
      default: { return null; }
    }
  };

  render() {
    return (
      <div className="component-button-panel" ref={this.acBtn}  onKeyPress={this.handelKeyPress}>
        <div >
          <Button name="AC" clickHandler={this.handleClick} clicked={this.state.clickedItem==="AC"} />
          <Button name="+/-" clickHandler={this.handleClick}  clicked={this.state.clickedItem==="+/-"}/>
          <Button name="%" clickHandler={this.handleClick} clicked={this.state.clickedItem==="%"} />
          <Button name="÷" clickHandler={this.handleClick} orange clicked={this.state.clickedItem==="÷"}/>
        </div>
        <div>
          <Button name="7" clickHandler={this.handleClick} clicked={this.state.clickedItem==="7"}/>
          <Button name="8" clickHandler={this.handleClick} clicked={this.state.clickedItem==="8"}/>
          <Button name="9" clickHandler={this.handleClick} clicked={this.state.clickedItem==="9"}/>
          <Button name="x" clickHandler={this.handleClick} orange clicked={this.state.clickedItem==="X"}/>
        </div>
        <div>
          <Button name="4" clickHandler={this.handleClick} clicked={this.state.clickedItem==="4"}/>
          <Button name="5" clickHandler={this.handleClick} clicked={this.state.clickedItem==="5"}/>
          <Button name="6" clickHandler={this.handleClick} clicked={this.state.clickedItem==="6"}/>
          <Button name="-" clickHandler={this.handleClick} orange clicked={this.state.clickedItem==="-"}/>
        </div>
        <div>
          <Button name="1" clickHandler={this.handleClick} clicked={this.state.clickedItem==="1"}/>
          <Button name="2" clickHandler={this.handleClick} clicked={this.state.clickedItem==="2"}/>
          <Button name="3" clickHandler={this.handleClick} clicked={this.state.clickedItem==="3"}/>
          <Button name="+" clickHandler={this.handleClick} orange clicked={this.state.clickedItem==="+"}/>
        </div>
        <div>
          <Button name="0" clickHandler={this.handleClick} wide clicked={this.state.clickedItem==="0"}/>
          <Button name="." clickHandler={this.handleClick} clicked={this.state.clickedItem==="."}/>
          <Button name="=" clickHandler={this.handleClick} orange clicked={this.state.clickedItem==="="}/>
        </div>
      </div>
    );
  }
}
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};
export default ButtonPanel;
