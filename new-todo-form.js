import React from 'react';

/**
 * A component with no data (props) pass in.
 */
export default function NewTodoForm( {taskForm, taskAuthor, updateParentComponent} )
{
  // handleAddClick(e, value) 
  // {
  //   e.preventDefault();
  //   console.log('The link was clicked.');
  // }

  return (
    <form>
      taskForm: {taskForm}<br />
      taskAuthor: {taskAuthor}<br />
      
      <br />

      <label>
        Task: <input type="text" name="new-task" onClick={updateParentComponent} />
      </label>
      <input type="button" value="Add" />
    </form>
  );
}