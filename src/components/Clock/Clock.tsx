import React, {useEffect, useState} from "react";

export type ClockPropsType = {

}

const get2letters = (num: number) => num < 10 ? '0' + num : num

export const Clock: React.FC<ClockPropsType> = (props) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])
    return <div>
        <span>
            {get2letters(date.getHours())}:
        </span>
        <span>
            {get2letters(date.getMinutes())}:
        </span>
        <span>
            {get2letters(date.getSeconds())}
        </span>
    </div>

}