import React, {useState} from "react";
import {DigitalClock} from "./DigitalClock";
import {AnalogClock} from "./AnalogClock";

export const Clock: React.FC = () => {
    const [mode, setMode] = useState<'analog' | 'digital'>('digital')

    return <div>
        <button disabled={mode === 'digital'} onClick={() => setMode('digital')}>Digital Clock</button>
        <button disabled={mode === 'analog'} onClick={() => setMode('analog')}>Analog Clock</button>
        {
            mode === 'digital'
                ? <DigitalClock/>
                : <AnalogClock/>
        }
    </div>
}