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
      {
        id: 1,
        url: "https://jsnelders.com/",
        title: "",
        alternateTitle: "Jason's Site",
        details: "Well, it's my site."
      },
      {
        id: 2,
        url: "https://jasonsnelders.dev/",
        title: "",
        alternateTitle: "My Profile",
        details: ""
      }
      ,
      {
        id: 3,
        url: "https://bitwarden.com/",
        title: "",
        alternateTitle: "",
        details: ""
      }
      ,
      {
        id: 4,
        url: "https://reactjs.org/",
        title: "",
        alternateTitle: "",
        details: ""
      }
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



