//-- React library
import React, { Component } from 'react';


//-- Helpers and test components
import Hello from './components/Hello';
import ShowSum from './components/ShowSum';
import TestChild from './components/TestChild';












//-- Define a "Button" component.
const Button = ({ iClicked }) => (
  <button onClick={iClicked} type="button">
    Toggle Show/Hide
  </button>
);












/**
 * The main application component
 */
export default class App extends Component 
{
  constructor() 
  {
    super();

    this.state = {
      firstName: 'Jason',
      lastName: 'Snelders'
    };


    this.todoItems = [
      "Learn ES2015",
      "Learn Vue.js",
      "Watch some TV",
      "Oh yeah, learn React",
    ];

    this.clickCcounter = 0;

    this.taskForm = "Big Form";
    this.taskAuthor = "BRUCE!";
  }





  /**
   * Click event handler
   */
  onCounterClick =() => {

    // Update state #1
    this.setState({
      clickCcounter: this.clickCcounter++
    });


    // Update state #2
    var newState = {...this.state};
    newState.firstName = "Bruce";     // Updating just one property. Leaving lastName.
    newState.location = "Melbourne";  // Creating a new property now.
    this.setState(newState);
  }


  toggleClickHandler = (data) => {
    console.log("toggleClickHandler()", data);
  }


  toggleShowHide = () => {
    console.log("toggleShowHide");
  };



  onAddNewTask = (data) => {
    console.log("onAddNewTask()", data);
  };

  



  /**
   * React method to render the component.
   */
  render() 
  {
    return (
      <div>
        <Hello name={this.state.firstName} />

        <div className="counterClicker" onClick={this.onCounterClick}>This div has been clicked {this.clickCcounter} times [{this.state.firstName} {this.state.lastName} in {this.state.location}].</div>
        
        <hr/>
        <ShowSum a={1} b={2} />
        <ShowSum a={'2'} b={'2'} />
        <ShowSum a={'2'} />
        <ShowSum />


        <hr />
        TestChild<br />
        <TestChild iClicked={this.toggleClickHandler} />

        <br />
        Button<br />
        <Button iClicked={this.toggleShowHide} />

        <hr />
        
      </div>

    );
  }
}



