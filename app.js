//-- React library
import React, { Component } from 'react';


//-- Components
import Hello from './Hello';
import TodoList from './todo-list';
import NewTodoForm from './new-todo-form';
import ShowSum from './show-sum';


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


  /**
   * React method to render the component.
   */
  render() 
  {
    return (
      <div>
        <Hello name={this.state.name} />

        <div className="counterClicker" onClick={this.onCounterClick}>This div has been clicked {this.clickCcounter} times [{this.state.firstName} {this.state.lastName} in {this.state.location}].</div>
        
        <hr/>
        <ShowSum a={1} b={2} />
        <ShowSum a={'2'} b={'2'} />
        <ShowSum a={'2'} />
        <ShowSum />

        <hr />
        <h1>TODO App</h1>

        <h3>New Task</h3>
        <NewTodoForm />

        <h3>My Tasks</h3>
        <TodoList items={this.todoItems} />
        
      </div>

    );
  }
}