import {ItemType} from "../ControlledAccordion/ControlledAccordion";
import React from "react";

type SelectPropsType = {
    value: number
    onChange: (value: any) => void
    items: ItemType[]
    isCollapsed: boolean
    setSelectCollapsed: (value: boolean) => void
    setSelectTitle: (value: number) => void
}


export function Select(props: SelectPropsType) {

    return (
        <div>
            <div onClick={() => props.setSelectCollapsed(!props.isCollapsed)}>{props.items.map(i => (i.value === props.value) && i.title)}</div>
           {props.isCollapsed || props.items.map((i, index) => <div key={index} onClick={() => props.setSelectTitle(i.value)}>{i.title}</div>)}
        </div>


    )


}