import React, {useEffect, useState} from "react";


const get2letters = (num: number) => num < 10 ? '0' + num : num

export const DigitalClock: React.FC = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
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

