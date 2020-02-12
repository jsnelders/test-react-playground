import React from 'react';

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