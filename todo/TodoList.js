import React from 'react';


/**
 * A "function" component with data passed in via the "items" parameter.
 * You can have multiple parameter (e.g. {items, label}).
 * 
 * Note the braces - "{" and "}" - enclosing the parameters.
 * 
 * But using a Class-based component is easier for event handlers....?
 */
export default function TodoList1( {items} )
{
  let taskNumber = 0;

  const listItems = items.map((item) => {
      taskNumber++;
      return (
        <li>{taskNumber}. {item} 
        <input type="button" value="X" title="Remove" onClick={onRemove} /></li>
      )
    }
  );



  function onRemove(taskNumber) {
    console.log("Removing...", taskNumber);
  }



  return (
    <ul>
      {listItems}
    </ul>
  );
}




export default class TodoList extends React.Component 
{
  constructor(props)
  {
    super(props);
    
    // "state" is an object expected by React (true?) that stores local state of a component.
    this.state = {
      task: "",
      due: ""
    };
  }



  onRemove(event, id) {
    //console.log("Removing...", event.target.name);
    //console.log("Removing...", event.target.attributes["taskid"]);
    console.log("Removing...", id, event.target);
  }



  render()
  {
    let taskNumber = 0;

    const listItems = this.props.items.map((item) => {
        taskNumber++;
        let id = taskNumber;  // If you don't do this then the last value of taskNumber is assigned ot all list items.
        
        return (
          <li>{taskNumber}. {item} 
          <input type="button" name={taskNumber} value="X" title="Remove" 
            onClick={ (e) => {this.onRemove(e, id.toString())} } /></li>
        )
      }
    );

    return (
    <ul>
      {listItems}
    </ul>
    );
  }

}