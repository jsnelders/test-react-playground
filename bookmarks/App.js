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
      bookmarks: []
    };

    // Some configuration values.
    this.config = {
      createdBy: "Jason"
    };

    this.loadBookmarks();
  }


  /**
   * Load the bookmarks from the cache when the app loads.
   */
  loadBookmarks()
  {
    //-- NOTE This generates the following warning
    //    Warning: Can't call setState on a component that is not yet mounted. 
    //    This is a no-op, but it might indicate a bug in your application. 
    //    Instead, assign to `this.state` directly or define a `state = {};` 
    //    class property with the desired state in the App component.
    //
    // const newBookmarks = [...Services.getBookmarksList()];
    // this.setState({
    //   bookmarks: newBookmarks
    // });
    
    this.state.bookmarks = Services.getBookmarksList();
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

    //NOTE: Passing in newBookmarks because allowing saveBookmarks()
    //      to use this.state.bookmarks was not saving the complete list 
    //      (I don't think state hade updated yet).
    this.saveBookmarks(newBookmarks);
  };



  /**
   * Event hander for the @onItemRemoved event of <BookmarksList>.  
   * Remove an item from the bookmarks list
   * 
   * @param {string} itemID - ID of the item to remove.
   */
  onItemRemoved = (itemID) => {
    console.log("App.onItemRemoved() " + itemID);

    const newBookmarks = this.state.bookmarks.filter(function( bookmark ) {
        return bookmark.id !== itemID;
    });

    this.setState({
      bookmarks: newBookmarks
    });

    this.saveBookmarks(newBookmarks);
  }


  /**
   * Save the bookmarks list back to cache.
   */
  saveBookmarks(bookmarks = null)
  {
    if (bookmarks != null) 
    {
      Services.saveBookmarksList(bookmarks);
    }
    else
    {
      Services.saveBookmarksList(this.state.bookmarks);
    }
  }

  



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
        <BookmarksList items={this.state.bookmarks} onItemRemoved={this.onItemRemoved} />
      </div>
    );
  }
}