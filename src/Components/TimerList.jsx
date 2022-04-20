import { useContext } from 'react';
import { context } from './Context';
import Item from './Item';


const TimerList = (props) => {
    // Context
    const context = useContext(context);

    return (
        <div className="w-full mt-6">
            <ul className="text-white px-8 py-3 rounded-md list-disc">
                {
                    context.timeArray.map((item) => (
                        <Item key={Math.random()}>
                            {item}
                        </Item>
                    ))
                }
            </ul>
        </div>
    )
};

export default TimerList;