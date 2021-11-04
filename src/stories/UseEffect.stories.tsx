import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect',
}

export const Example = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        console.log('every time')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('once')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('then dependence is changed')
        document.title = counter.toString()
    }, [fake])

    return <>
        <button onClick={() => setCounter(state => state + 1)}>counter+</button>
        <button onClick={() => setFake(state => state + 1)}>fake+</button>
        <div>counter: {counter}</div>
        <div>fake: {fake}</div>
    </>
}

export const ExampleSetInterval = () => {
    const [seconds, setSeconds] = useState(new Date().getSeconds())
    const [minutes, setMinutes] = useState(new Date().getMinutes())
    const [hours, setHours] = useState(new Date().getHours())

    useEffect(() => {
        setInterval(() => {
            setSeconds(new Date().getSeconds())
            setMinutes(new Date().getMinutes())
            setHours(new Date().getHours())
        }, 1000)
    }, [seconds, minutes, hours])

    return <>
        time: {hours}:{minutes}:{seconds}
    </>
}

export const ExampleCleanUp = () => {
    console.log('example occur')
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log('eff occur')
    }, [])

    return <div>
        <button onClick={() => setCounter(counter + 1)}>+++</button>
        counter = {counter}
    </div>
}

export const ExampleKeyTracker = () => {
    const [text, setText] = useState('')
    console.log(`component rendered with ${text}`)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText( state => state + e.key)
        }

        window.document.addEventListener('keypress', handler)

        return () => {
            window.document.removeEventListener('keypress', handler)
        }
    }, [])

    return <div>
        Typed text : {text}
    </div>
}

export const ExampleSetTimeout = () => {
    const [text, setText] = useState('')

    useEffect(() => {
       const timeoutID = setTimeout(() => {
            setText('3 sec passed')
        }, 3000)

        return () => {
            clearTimeout(timeoutID)
        }
    }, [text])

    return <div>
        {text}
    </div>
}