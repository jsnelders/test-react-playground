import React from 'react';

/**
 * A component with no data (props) pass in.
 */
export default function NewTodoForm( )
{
  return (
    <form>
      <label>
        Task: <input type="text" name="new-task" />
      </label>
      <input type="button" value="Add" />
    </form>
  );
}