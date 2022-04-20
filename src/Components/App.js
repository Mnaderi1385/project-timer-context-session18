import React, { useState } from 'react';
import '../app.css';
import Title from './Title';
import Timer from './Timer';
import TimerList from './TimerList';
import { context } from './Context';

document.body.classList = 'bg-slate-800 selection:bg-red-800 selection:text-white';


const App = () => {
    const [timeArray, setTimeArray] = useState([]);

    return (
        <context.Provider
            value={{
                timeArray: timeArray ,
                setTimeArray: setTimeArray
            }}
        >
            <div className="flex justify-center items-center min-h-screen flex-col duration-200">
                <div className="max-w-sm mx-auto">
                    <Title />
                    <Timer />
                    <TimerList />
                </div>
            </div>
        </context.Provider>
    );
};


export default App;