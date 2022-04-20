import React, { useContext } from 'react';
import { context as c } from './Context';

const Item = (props) => {
    const context = useContext(c);
    
    const deleteTime = (e) => {
        context.setTimeArray(context.timeArray.filter(item => item != e.target.innerHTML))
    };
    return (
        <li className="mt-2 cursor-pointer hover:text-gray-300" onClick={deleteTime}>{props.children}</li>
    );
};

export default Item;