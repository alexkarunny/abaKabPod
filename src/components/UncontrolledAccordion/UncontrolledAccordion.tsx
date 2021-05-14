import React, {useState} from "react";

export type UncontrolledAccordionPropsType = {
    title: string
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <IndependentAccordionTitle text={props.title} onClick={() => setCollapsed(!collapsed)}/>
            {collapsed && <IndependentAccordionBody/>}
        </div>
    )
}


type IndependentAccordionTitlePropsType = {
    text: string
    onClick: () => void
}

function IndependentAccordionTitle(props: IndependentAccordionTitlePropsType) {

    return (
        <h3 onClick={() => props.onClick()}>{props.text}</h3>
    );
}

function IndependentAccordionBody() {

    return (
        <ul>
            <IndependentAccordionList text={'Hello'}/>
            <IndependentAccordionList text={'Good morning'}/>
            <IndependentAccordionList text={'Good night'}/>
        </ul>
    );
}

type IndependentAccordionListPropsTitle = {
    text: string
}

function IndependentAccordionList(props: IndependentAccordionListPropsTitle) {
    return (
        <li>{props.text}</li>
    )
}