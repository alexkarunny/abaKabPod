import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {PageTitle} from "./components/PageTitle/PageTitle";
import {OnOff} from "./components/Switch/Switch";
import {IndependentAccordion} from "./components/IndependentAccordion/IndependentAccordion";
import {IndependentRating} from "./components/IndependentRating/IndependentRating";

function App() {
    return (
        <div>

            <OnOff />
            <OnOff />
            <OnOff />

            <IndependentAccordion title={'menu'}/>

            <IndependentRating/>

        </div>
    );
}

export default App;
