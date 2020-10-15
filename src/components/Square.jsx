import React from 'react';

const Square = ({id}) => {
    return (
        <div style={{width: 100, height: 100, background: "red", margin:10}}>
            {id}
        </div>
    )
};

export default Square;