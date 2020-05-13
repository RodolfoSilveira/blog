import React from 'react';

function Author(props) {
  return (
    <div>
      <h1>Author</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  )
}

export default Author;
