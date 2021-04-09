import React from "react";

type AccordionPropsType = {
    title: string,
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    debugger
    if (props.collapsed === false) {
        return (
            <div>
                <AccordionTitle text={props.title}/>
                <AccordionBody/>
            </div>
        );
    } else {
        return (
            <div>
                <AccordionTitle text={props.title}/>
            </div>
        )
    }
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
            <AccordionList text={'rt'}/>
            <AccordionList text={'dfkj'}/>
            <AccordionList text={'asdf'}/>
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