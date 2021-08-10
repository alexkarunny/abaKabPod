import {Select, SelectPropsType} from "./Select";
import {Story} from "@storybook/react";
import {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'My select',
    component: Select
}

export const MySelect:Story<SelectPropsType> = (args) => {
    let [selectTitle, setSelectTitle] = useState<number>(1)
    let [selectCollapsed, setSelectCollapsed] = useState<boolean>(true)
    const selectNewTitle = (value: number) => {
        setSelectTitle(value)
        setSelectCollapsed(true)
    }
    return (
        <Select {...args} value={selectTitle} onChange={action('changed')}  isCollapsed={selectCollapsed} setSelectCollapsed={setSelectCollapsed} setSelectTitle={selectNewTitle} />
    )

}

MySelect.args = {
    items: [{title: 'none', value: 1}, {title: 'Lviv', value: 2}, {title: 'kiev', value: 3}, {title: 'grodno', value: 4}]

}