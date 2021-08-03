import React from "react";

export type ItemType = {
    title: string
    value: number
}

export type ControlledAccordionPropsType = {
    /**
     * Title of menu
     */
    title: string,
    collapsed: boolean
    setAccordionCollapsed: (value: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void
    color?: string
}

export function ControlledAccordion(props: ControlledAccordionPropsType) {

    return (
        <div>
            <AccordionTitle text={props.title} setAccordionCollapsed={props.setAccordionCollapsed} collapsed={props.collapsed} color={props.color}/>
            {props.collapsed || <AccordionBody items={props.items} onClick={props.onClick}/>}
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
        <h3 style={{color: props.color ? props.color : 'red'}} onClick={() => {props.setAccordionCollapsed(!props.collapsed)}}>{props.text}</h3>
    );
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

export function AccordionBody(props: AccordionBodyPropsType ) {
    debugger
    console.log('AccordionBody rendering');
    return (
        <ul>
            {
                props.items.map((li, index )=> <li onClick={() => { props.onClick(li.value) } } key={index}>{li.title!}</li> )
            }
        </ul>
    );
}

