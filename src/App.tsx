import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {PageTitle} from "./components/PageTitle/PageTitle";

function App() {
    return (
        <div>
            <PageTitle title={"This is an component"}/>
            <PageTitle title={"users"}/>
            <Rating value={1} />
            <Accordion title={"hello"} collapsed={true}/>
            <Accordion title={"bye"} collapsed={false}/>
            <Rating value={4} />
        </div>
    );
}

export default App;
