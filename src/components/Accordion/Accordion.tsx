import React from "react";

type AccordionPropsType = {
    title: string,
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle text={props.title}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    text: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    debugger
    console.log('AccordionTitle rendering');
    return (
        <h3>{props.text}</h3>
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

export default Accordion;