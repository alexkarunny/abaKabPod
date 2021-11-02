import React, {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'useState',
}

const upgrade = () => {
    console.log('upgrade')
    return 2569
}

export const Example = () => {
    console.log('ex')
    const [counter, setCounter] = useState(upgrade);

    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}