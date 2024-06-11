import React from 'react';

// Sample data to be displayed in the list
const data = [
  { id: 1, name: 'Use Array.map' },
  { id: 2, name: 'Not a for loop' },
  { id: 3, name: 'Give Each item a Unique Key' },
  { id: 4, name: 'Avoid Using array index as the key' },
];

const ListView = () => {
  return (
    <div>
      <h1>The "React Way" to Render a List</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;