import React from "react";

export type ControlledAccordionPropsType = {
    title: string,
    collapsed: boolean
    setAccordionCollapsed: (value: boolean) => void
}

export function ControlledAccordion(props: ControlledAccordionPropsType) {

    return (
        <div>
            <AccordionTitle text={props.title} setAccordionCollapsed={props.setAccordionCollapsed} collapsed={props.collapsed}/>
            {props.collapsed || <AccordionBody/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    text: string
    setAccordionCollapsed: (value: boolean) => void
    collapsed: boolean

}

function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <h3 onClick={() => {props.setAccordionCollapsed(!props.collapsed)}}>{props.text}</h3>
    );
}

function AccordionBody() {
    debugger
    console.log('AccordionBody rendering');
    return (
        <ul>
            <AccordionList text={'Hellp'}/>
            <AccordionList text={'Salut'}/>
            <AccordionList text={'A bien to'}/>
        </ul>
    );
}

type AccordionListPropsTitle = {
    text: string
}

function AccordionList(props: AccordionListPropsTitle) {
    return (
        <>
            <li>{props.text}</li>
        </>
    )
}

