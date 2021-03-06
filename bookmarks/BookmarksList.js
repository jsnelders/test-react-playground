import React from 'react';


/**
 * A "function" component with data passed in via the "items" parameter.
 * You can have multiple parameter (e.g. {items, label}).
 * 
 * Note the braces - "{" and "}" - enclosing the parameters.
 * 
 * But using a Class-based component is easier for event handlers....?
 * Nope. I was just being a crap programmer.
 */
export default function BookmarksList( {items, onItemRemoved} )
{
  let taskNumber = 0;


  const listItems = items.map((item) => {
      return (
        <li className="bookmark-list-item" key={item.id}>
            <div className="cc-row">
              <div className="cc-col cc-left">{getTitle(item.title, item.alternateTitle)}<br />
                <small><a href={item.url}>{item.url}</a></small><br />
                <small>[ID: {item.id}]</small>
              </div>
              <div className="cc-col cc-right">
                <button className="remove-button w3-tiny" type="button" value="X" title="Remove" onClick={ (e) => {onRemove(e, item.id)} } >
                <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
        </li>
      )
    }
  );



  function onRemove(event, itemId) {
    console.log("Removing item: ", itemId);

    onItemRemoved(itemId);
  }


  function getTitle(title, alternateTitle)
  {
    if (title) return title;
    if (alternateTitle) return alternateTitle;

    return "(untitled)";
  }



  return (
    <ul className="bookmark-list">
      {listItems}
    </ul>
  );
}









// // Change to "class TodoList extends React.Component" to use this version.
// class TodoList extends React.Component 
// {
//   constructor(props)
//   {
//     super(props);
    
//     // "state" is an object expected by React (true?) that stores local state of a component.
//     this.state = {
//       task: "",
//       due: ""
//     };
//   }



//   onRemove(event, id) {
//     console.log("Removing...", id, event.target.name);
//   }



//   render()
//   {
//     let taskNumber = 0;

//     const listItems = this.props.items.map((item) => {
//         taskNumber++;
//         let id = taskNumber;  // If you don't do this then the last value of taskNumber is assigned ot all list items.
        
//         return (
//           <li key={taskNumber} className="bookmark-list-item">

//             <div className="w3-row">
//               <div className="w3-col s10">
//                 {taskNumber}. {item}
//               </div>
//               <div className="w3-col s2 w3-right-align">
//                 <input className="remove-button" type="button" name={taskNumber} value="X" title="Remove" 
//                   onClick={ (e) => {this.onRemove(e, id.toString())} } 
//                 />
//               </div>
//             </div>
            
//           </li>
//         )
//       }
//     );

//     return (
//     <ul>
//       {listItems}
//     </ul>
//     );
//   }

// }

