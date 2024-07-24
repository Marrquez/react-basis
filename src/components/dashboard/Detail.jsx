import React, { useState } from 'react';

function Detail() {
    const [value, setValue] = useState("Detail works!");
  
    return (
      <>
        <h1>{value}</h1>
        <p>Hello world!!</p>
      </>
    );
  }

export default Detail;