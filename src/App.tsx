import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/Switch/Switch";
import {IndependentAccordion} from "./components/IndependentAccordion/IndependentAccordion";
import {IndependentRating} from "./components/IndependentRating/IndependentRating";
import Accordion from "./components/Accordion/Accordion";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)

    return (
        <div className={"app"}>

            <OnOff />

            <IndependentRating/>

            <IndependentAccordion title={'hi'} />

            <Rating value={ratingValue} onClick={setRatingValue}/>

            <Accordion title={"hie"} collapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed}/>



        </div>
    );
}

export default App;
