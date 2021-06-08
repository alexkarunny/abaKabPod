import React, {useState} from 'react';
import './App.css';
import {ControlledRating, RatingValueType} from "./components/ControlledRating/ControlledRating";
import {UncontrolledOnOff} from "./components/UncontrolledSwitch/UncontrolledSwitch";
import {ControlledOnOff} from "./components/ControlledSwitchSwitch/ControlledSwitch";
import {ControlledAccordion} from "./components/ControlledAccordion/ControlledAccordion";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Select} from "./components/Select/Select";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    let [selectCollapsed, setSelectCollapsed] = useState<boolean>(true)
    let [selectTitle, setSelectTitle] = useState<number>(1)
const selectNewTitle = (value: number) => {
    setSelectTitle(value)
    setSelectCollapsed(true)
}
    return (
        <div className={"app"}>

            <UncontrolledOnOff onChange={setSwitchOn} /> {switchOn.toString()}

            <ControlledOnOff on={switchOn} setSwitchOn={setSwitchOn} /> {switchOn.toString()}
            <ControlledAccordion setAccordionCollapsed={setAccordionCollapsed} collapsed={accordionCollapsed} title={"Hyi"} items={[{title: 'hello', value: 13}, {title: 'hey', value: 2}]} onClick={(value) => alert(value)}/>
            <UncontrolledAccordion title={"hey"}/>
            <ControlledRating value={ratingValue} onClick={setRatingValue} />
            <UncontrolledRating />
            <Select value={selectTitle} onChange={x => x} items={[{title: 'none', value: 1}, {title: 'Kiev', value: 2}, {title: 'Lvov', value: 3}]} isCollapsed={selectCollapsed} setSelectCollapsed={setSelectCollapsed} setSelectTitle={selectNewTitle}/>
        </div>
    );
};

export default App;
