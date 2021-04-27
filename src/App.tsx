import React, {useState} from 'react';
import './App.css';
import {ControlledRating, RatingValueType} from "./components/ControlledRating/ControlledRating";
import {UncontrolledOnOff} from "./components/UncontrolledSwitch/UncontrolledSwitch";
import {ControlledOnOff} from "./components/ControlledSwitchSwitch/ControlledSwitch";
import {ControlledAccordion} from "./components/ControlledAccordion/ControlledAccordion";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className={"app"}>

            <UncontrolledOnOff onChange={setSwitchOn} /> {switchOn.toString()}

            <ControlledOnOff on={switchOn} setSwitchOn={setSwitchOn} /> {switchOn.toString()}
            <ControlledAccordion setAccordionCollapsed={setAccordionCollapsed} collapsed={accordionCollapsed} title={"Hyi"} />
            <UncontrolledAccordion title={"hey"}/>
            <ControlledRating value={ratingValue} onClick={setRatingValue} />
            <UncontrolledRating />
        </div>
    );
}

export default App;
