import React from 'react';

/**
 * A component with no data (props) pass in.
 */

export default class NewTodoForm extends React.Component 
{
  constructor(props)  //taskForm, taskAuthor, updateParentComponent
  {
    super(props);
    
    this.state = {
      task: "",
      due: ""
    };
  }


  /**
   * Handle user field input. Update the componet state/
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

    this.props.updateParentComponent(this.state);
  }


  render() {
    return (<form>
      taskForm: {this.props.taskForm}<br />
      taskAuthor: {this.props.taskAuthor}<br />
      
      <br />

      <label>
        Task: <input name="task" type="text" onChange={this.onFieldChange} />
        <br />
        Due: <input name="due" type="text" onChange={this.onFieldChange} />
      </label>
      <input type="button" value="Add" onClick={this.onSubmitForm} />
    </form>)
  }
}