import {ItemType} from "../ControlledAccordion/ControlledAccordion";
import React from "react";
import s from "./Select.module.css"

export type SelectPropsType = {
    value: number
    onChange: (value: any) => void
    items: ItemType[]
    isCollapsed: boolean
    setSelectCollapsed: (value: boolean) => void
    setSelectTitle: (value: number) => void
}


export function Select(props: SelectPropsType) {
    const mainSelect = props.items.find(i => i.value === props.value)
    return (
        <div>
            <div onClick={() => props.setSelectCollapsed(!props.isCollapsed)}>
                <h3>{mainSelect && mainSelect.title}</h3>
            </div>
            {props.isCollapsed || props.items.map((i, index) => <div key={index}
                                                                     onClick={() => props.setSelectTitle(i.value)} className={`${s.item} ${s.active}`}>{i.title}</div>)}
        </div>


    )


}