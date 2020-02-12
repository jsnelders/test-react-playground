import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

import TodoList from './todo-list';
import NewTodoForm from './new-todo-form';

import './style.css';
import './main.scss';


class App extends Component 
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


  render() 
  {
    return (
      <div>
        <Hello name={this.state.name} />

        <div className="counterClicker" onClick={this.onCounterClick}>This div has been clicked {this.clickCcounter} times [{this.state.firstName} {this.state.lastName} in {this.state.location}].</div>
        
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

render(<App />, document.getElementById('root'));
