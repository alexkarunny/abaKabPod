import React, {useState} from "react";

export default {
    title: 'HOC react.memo demo'
}

const NewMessageCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}

const UsersSecter = (props: {users: Array<string>}) => {
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecter)

export const Example = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Dymich", "Valera", "Alex"])
    const addUser = () => {
        const newUsers = [...users, `${'sad'} new Date()`]
        console.log('react')
        setUsers(newUsers)
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessageCounter count={counter} />
        <Users users={users} />
    </>
}