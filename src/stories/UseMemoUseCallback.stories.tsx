import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemoUseCallback',
}

export const Example1 = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(6)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempA = 1
        for (let i = 1; i <= a; i++) {
            let fake = i
            while (fake < 1000000000) {
                fake++
            }
            tempA *= i
        }
        return tempA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>

        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for a: {resultB}
        </div>
    </>
}

// UseMemo helps reactMemo

const UsersSecter = (props: { users: Array<string> }) => {
    console.log('users secret')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecter)

export const HelpToReactMemo = () => {
    console.log('react')
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Dymich", "Valera", "Alex"])

    const addUser = () => {
        const newUsers = [...users, `${'sad'} new Date()`]
        setUsers(newUsers)
    }

    const filterUsers = useMemo(() => users.filter(m => m.toUpperCase().indexOf("A") > -1), [users])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>+</button>
        {counter}
        <Users users={filterUsers}/>
    </>
}


// useCallback

const BooksSecret = (props: { books: Array<string>; addBook: () => void }) => {
    console.log('BooksSecret render')
    return <div>
        <button onClick={() => {
            props.addBook()
        }}>Add Book
        </button>
        {
            props.books.map((book, i) => <div key={i}>{book}</div>)
        }</div>
}

const Books = React.memo(BooksSecret)

export const BooksLikesUseCallback = () => {
    console.log('BooksLikesUseCallback render')
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(["React", "Css", "HTML5"])

    const addBook = useCallback(() => {
        console.log(books)
        const newBooks = [...books, `'Angular' ${new Date()}`]
        setBooks(newBooks)
    }, [books])

    const filterBooks = useMemo(() => {
        return books.filter(book => book.toUpperCase().indexOf("A") > -1)
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>

        {counter}
        <Books books={filterBooks} addBook={addBook}/>
    </>
}

