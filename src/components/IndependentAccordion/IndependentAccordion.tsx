import React, {useState} from "react";

type IndependentAccordionPropsType = {
    title: string
}

export function IndependentAccordion(props: IndependentAccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <IndependentAccordionTitle text={props.title}/>
            <button onClick={() => {
                setCollapsed(true)
            }}>set
            </button>
            <button onClick={() => {
                setCollapsed(false)
            }}>unset
            </button>
            {collapsed && <IndependentAccordionBody/>}
        </div>
    )
}


type IndependentAccordionTitlePropsType = {
    text: string
}

function IndependentAccordionTitle(props: IndependentAccordionTitlePropsType) {

    return (
        <h3>{props.text}</h3>
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