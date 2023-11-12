import React, { useState } from 'react';

const COLORS = ['red', 'green', 'blue', 'yellow', 'gray'];

function Colors() {
    const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

    const onButtonClick = (color) => () => {
        setBackgroundColor(color);
    };

    return (
        <div
            className="Colors-Container"
            style={{
                backgroundColor
            }}
        >
            {COLORS.map((color) => {
                return <button
                    type='button'
                    key={color}
                    className={backgroundColor === color ? 'selected': ''}
                    onClick={onButtonClick(color)}>
                        {color}
                </button>
            })}
        </div>
    );
}

export default Colors;