import React from 'react';
import '../app.css';
import { context } from './Context';
import TimerList from './TimerList';


let interval;
class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            hour: 0,
            minute: 0,
            second: 0,
            isStart: false,
        };
    };

    // Context
    static contextType = context;

    // Start Timer
    startTimer = () => {
        if(this.state.isStart === false) {
            this.setState({
                isStart: true,
            });
            interval = setInterval(() => {
                this.setState({
                    second: this.state.second + 1,
                });
    
                if(this.state.second === 60) {
                    this.setState({
                        second: 0,
                        minute: this.state.minute + 1,
                    });
                };
                if(this.state.minute === 60) {
                    this.setState({
                        minute: 0,
                        hour: this.state.hour + 1,
                    });
                };
            }, 1000);
        }
    };
    // Stop Timer
    stopTimer = () => {
        this.setState({
            isStart: false,
        });
        clearInterval(interval);
    };
    
    resetTimer = () => {
        this.stopTimer();
        this.setState({
            hour: 0,
            minute: 0,
            second: 0,
        });
    };

    saveTime = () => {
        let h = this.state.hour;
        let m = this.state.minute;
        let s = this.state.second;

        let newTime = `${h > 9 ? h : '0' + h} : ${m > 9 ? m : '0' + m} : ${s > 9 ? s : '0' + s}`;

        this.context.setTimeArray([...this.context.timeArray, newTime])
    };



    render() {
        let h = this.state.hour;
        let m = this.state.minute;
        let s = this.state.second;

        return(
            <>
                <p className="text-center cursor-pointer text-gray-100 text-2xl mt-4 animate-pulse shadow-md select-none shadow-slate-900 flex justify-center items-center w-48 py-3 px-7 rounded-lg mx-auto hover:shadow-lg duration-150" onClick={this.saveTime}>
                    {`${h > 9 ? h : '0' + h} : ${m > 9 ? m : '0' + m} : ${s > 9 ? s : '0' + s}`}
                </p>
                <div className="flex flex-col sm:flex-row items-center">
                    <button type="button" className="bg-slate-900 text-white px-4 py-3 text-sm mt-5 ml-3 border-2 border-transparent hover:bg-transparent hover:border-slate-900 duration-300 rounded-full flex justify-center items-center" onClick={this.startTimer} title="Start">Start</button>
                    <button type="button" className="bg-slate-900 text-white px-4 py-3 text-sm mt-5 ml-3 border-2 border-transparent hover:bg-transparent hover:border-slate-900 duration-300 rounded-full flex justify-center items-center" onClick={this.stopTimer} title="Stop">Stop</button>
                    <button type="button" className="bg-slate-900 text-white px-4 py-3 text-sm mt-5 ml-3 border-2 border-transparent hover:bg-transparent hover:border-slate-900 duration-300 rounded-full flex justify-center items-center" onClick={this.resetTimer} title="Reset">Reset</button>
                </div>
            </>
        );
    };
}

export default Timer;