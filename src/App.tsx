import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {PageTitle} from "./components/PageTitle/PageTitle";

function App() {
    return (
        <div>

            <Accordion title={"hello"} collapsed={true}/>
            <Accordion title={"bye"} collapsed={false}/>

        </div>
    );
}

export default App;
