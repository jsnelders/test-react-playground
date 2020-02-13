import React from 'react';

/**
 * A class-based component.
 * We're using this to make it easier to work with state.
 */
export default class CreateTodoItem extends React.Component 
{
  constructor(props)
  {
    super(props);
    
    // "state" is an object expected by React (true?) that stores local state of a component.
    this.state = {
      url: "",
      alternateTile: "",
      details: ""
    };
  }



  /**
   * Handle user field input. Update the componet state.
   */
  onFieldChange = (event) => {
    this.setState({

      // Set the state value for a corresponding form field's "name".
      [event.target.name]: event.target.value
    });

    console.log("onFieldChange", this.state);
  }



  /**
   * Handle user field input. Update the componet state/
   */
  onSubmitForm = (event) => {
    event.preventDefault();

    console.log("onSubmitForm", this.state);

    this.props.onSubmitted(this.state);
  }



  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <p>
          CreatedBy: {this.props.taskCreatedBy}
        </p>

        <div className="w3-row">
          <div className="w3-col s4">
            <label>URL:</label>
          </div>
          <div className="w3-col s8">
            <input name="url" type="text" onChange={this.onFieldChange} />
          </div>
        </div>

        <div className="w3-row">
          <div className="w3-col s4">
          <label>Alternate Title (optional):</label>
          </div>
          <div className="w3-col s8">
            <input name="alternateTile" type="text" onChange={this.onFieldChange}  />
          </div>
        </div>

        <div className="w3-row">
          <div className="w3-col s4">
          <label>Details: </label>
          </div>
          <div className="w3-col s8">
            <textarea name="details" type="text" onChange={this.onFieldChange}></textarea>
          </div>
        </div>

        <div className="w3-row">
          <div className="w3-col s4">
            &nbsp;
          </div>
          <div className="w3-col s8">
            <input type="submit" value="Create Bookmark" />
          </div>
        </div>
      </form>
    )
  }
}