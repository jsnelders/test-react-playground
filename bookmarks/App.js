//-- React library
import React, { Component } from 'react';


//-- Todo List components
import AddBookmark from './AddBookmark';
import BookmarksList from './BookmarksList';
import EditBookmark from './EditBookmark';





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
        <h3>New Bookmark</h3>
        <AddBookmark taskForm={this.taskForm} taskAuthor={this.taskAuthor} updateParentComponent={this.onAddNewTask} />

        <h3>My Bookmarks</h3>
        <BookmarksList items={this.todoItems} />
        
      </div>

    );
  }
}



