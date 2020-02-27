/// Add helpers services here, like web service calls and other "global" support functions.

export default class Services 
{
  /**
   * Generate and return a GUID/UUID.
   * 
   * @returns {string} The unique ID.
   */
  static uuidv4 = () => {
    // Source: https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript

    // return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    //   var r = (Math.random() * 16) | 0, v = c == "x" ? r : (r & 0x3) | 0x8;
    //   return v.toString(16);
    // });

    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
  };


  /**
   * Return data from the localStorage cache.
   */
  static getCache = (key) => {
    return JSON.parse(localStorage.getItem(key));
  }


  /**
   * Save data to the local storage cache.
   */
  static setCache = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  }



  static _bookmarksCacheKey = "bookmarksList";

  /**
   * Save the complete bookmarks list to caceh.
   */
  static getBookmarksList = () => {
    let list = Services.getCache(Services._bookmarksCacheKey);

    if (!list)
    {
      // Not created yet.
      list = [
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
          title: "Bitwarden Password Manager",
          alternateTitle: "",
          details: ""
        }
        ,
        {
          id: 4,
          url: "https://reactjs.org/",
          title: "React",
          alternateTitle: "",
          details: ""
        }
      ];

      Services.setCache(Services._bookmarksCacheKey, list);
    }

    return list;
  }


  /**
   * Save the complete bookmarks list to caceh.
   */
  static saveBookmarksList = (bookmarksList) => {
    console.log("Services.saveBookmarksList(): ", bookmarksList);
    Services.setCache(Services._bookmarksCacheKey, bookmarksList);
  }
}
