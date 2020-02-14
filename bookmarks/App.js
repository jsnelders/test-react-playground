//-- React library
import React, { Component } from 'react';

import Services from './Services'

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
      // The complete list of saved bookmarks.
      bookmarks: [
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
      ]
    };

    // Some configuration values.
    this.config = {
      createdBy: "Jason"
    };
  }



  

  /**
   * Event hander for the @onSubmitted event of <AddBookmark>.  
   * Add a new bookmark to the 'bookmarks' list.
   * 
   * @param {object} data - The form data containing the new bookmark fields.
   */
  onAddNewBookmark = (data) => {
    //console.log("onAddNewBookmark()", data);

    // Clone the existing bookmarks state to generate new state.
    var newBookmarks = [...this.state.bookmarks];

    // Generate an ID for the new bookmark.
    const newID = Services.uuidv4();

    // Clone the supplied form data.
    // If we don't clone then subsequent calls will reference back to the same
    // 'data' object and we end up with duplicate IDs.
    let newBookmark = {...data};

    // Add the new bookmark to the new state,
    newBookmark.id = newID;
    newBookmarks.push(newBookmark);

    // Update the bookmark state.
    this.setState({
      bookmarks: newBookmarks
    });

    //console.log("onAddNewBookmark(): state=", this.state);
    //console.log("--------------------------------------------------");
  };

  



  /**
   * React method to render the component.
   */
  render() 
  {
    return (
      <div>
        <h3>New Bookmark</h3>
        <AddBookmark taskCreatedBy={this.config.createdBy} onSubmitted={this.onAddNewBookmark} />

        <h3>My Bookmarks</h3>
        <BookmarksList items={this.state.bookmarks} />
      </div>
    );
  }
}