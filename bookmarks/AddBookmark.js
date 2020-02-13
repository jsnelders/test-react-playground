import React from 'react';

/**
 * A class-based component.
 * We're using this to make it easier to work with state.
 */
export default class CreateTodoItem extends React.Component 
{
  constructor(props)  //taskForm, taskAuthor, updateParentComponent
  {
    super(props);
    
    // "state" is an object expected by React (true?) that stores local state of a component.
    this.state = {
      task: "",
      due: ""
    };
  }



  /**
   * Handle user field input. Update the componet state.
   */
  onFieldChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value // Set the state value for a corresponding form field's "name".
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
      <form>
        <p>
          CreatedBy: {this.props.taskCreatedBy}
        </p>

        <label>
          URL: <input name="url" type="text" onChange={this.onFieldChange} />
        </label>
        <br />

        <label>
          Alternate Title (optional): <input name="due" type="text" onChange={this.onFieldChange} />
        </label>
        <br />
        <label>
          Details: <textarea name="details" type="text" onChange={this.onFieldChange}></textarea>
        </label>

        <div>
          <input type="button" value="Create" onClick={this.onSubmitForm} />
        </div>
      </form>
    )
  }
}