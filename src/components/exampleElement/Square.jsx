import React from 'react';

const style = {
    display:'block',
    width: 100,
    height: 100,
    background: "Yellow",
    color: "black",
    // verticalAlign: 'middle',
    // minHeight: '10em',
    // display: 'table-cell',
};

const Square = ({id}) => {
    return (
        <div style={style}>
            <p>{id}</p>
        </div>
    )
};

export default Square;