import React, { useState } from 'react';

function Input() {
    const [value, setValue] = useState("");
  
    return (
      <input
        type="text"
        placeholder="Controlled search..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  }

export default Input;