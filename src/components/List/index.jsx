import React from 'react';

const List = ({ items, toggleComplete }) => {
  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <button onClick={() => toggleComplete(item.id)}>
            {item.complete ? 'Mark Incomplete' : 'Mark Complete'}
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default List;