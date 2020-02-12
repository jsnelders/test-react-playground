import React from 'react';

export default function TodoList( {items} )
{
  let taskNumber = 0;

  const listItems = items.map((item) => {
    taskNumber++;
    return (<li>{taskNumber}. {item} <input type="button" value="X" title="Remove" /></li>)
  }
  );

  return (
    <ul>
      {listItems}
    </ul>
  );
}