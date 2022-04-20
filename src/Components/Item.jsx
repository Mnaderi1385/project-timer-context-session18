import React from 'react';

const Item = (props) => {

    return (
        <li className="mt-2">{props.children}</li>
    );
};

export default Item;