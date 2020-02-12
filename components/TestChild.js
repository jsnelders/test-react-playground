import React from "react";


export default class TestChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  preClickHandler = () => {
    const newValue = {...this.state}; // Copy the existing state
    newValue.counter++; // Update a value

    console.log("TestChild.preClickHandler(): newValue=", newValue);

    
    this.setState(newValue);  // Update/set the state.

    props.iClicked(newValue);  // Pass it back to the parent
    //NOTE: The state may not actually be updated yet, so the wrong value is passed through iClicked()
    //props.iClicked(this.state.counter2);
  }


  render() {
    return (
      <div>
        <button onClick={this.preClickHandler}>Click me</button>
        <span>{this.state.counter2}</span>
      </div>
    );
  }
}

//export default TestChild;