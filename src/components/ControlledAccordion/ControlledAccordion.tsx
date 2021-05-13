import React from "react";

export type ControlledAccordionPropsType = {
    /**
     * Title of menu
     */
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
    color?: string

}

export function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <h3 style={{color: props.color ? props.color : 'black'}} onClick={() => {props.setAccordionCollapsed(!props.collapsed)}}>{props.text}</h3>
    );
}

export function AccordionBody() {
    debugger
    console.log('AccordionBody rendering');
    return (
        <ul>
            <AccordionList text={'Hello'}/>
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

