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


    this.bookmarks = [
      "Learn ES2015",
      "Learn Vue.js",
      "Watch some TV",
      "Oh yeah, learn React",
    ];

    this.clickCcounter = 0;

    this.taskConfig = {
      createdBy: "Jason"
    };
  }




  onAddNewBookmark = (data) => {
    console.log("onAddNewBookmark()", data);
  };

  



  /**
   * React method to render the component.
   */
  render() 
  {
    return (
      <div>
        <h3>New Bookmark</h3>
        <AddBookmark taskCreatedBy={this.taskConfig.createdBy} onSubmitted={this.onAddNewBookmark} />

        <h3>My Bookmarks</h3>
        <BookmarksList items={this.bookmarks} />
        
      </div>

    );
  }
}



