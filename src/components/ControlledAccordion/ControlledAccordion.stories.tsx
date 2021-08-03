import React, {useState} from "react";
import {Meta, Story} from '@storybook/react';
import {ControlledAccordion, ControlledAccordionPropsType} from "./ControlledAccordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'ControlledAccordion',
    component: ControlledAccordion,
    argTypes: {
        color: {
            control: 'color',
        }
    }
} as Meta;


const Template: Story<ControlledAccordionPropsType> = (args) => <ControlledAccordion {...args}/>

export const MenuUncollapsed = Template.bind({})

MenuUncollapsed.args = {
    title: 'hello',
    collapsed: false,
    setAccordionCollapsed: action('switch false to true'),
    items: [{title: 'hello', value: 13}, {title: 'hey', value: 2}],
    color: 'green',
}

export const MenuCollapsed = Template.bind({})

MenuCollapsed.args = {
    title: 'hello',
    collapsed: true,
    setAccordionCollapsed: action('switch true to false'),
    items: [],

}

const callback = action('wasclicked')

export const MenuMode:Story<ControlledAccordionPropsType> = (args) => {
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)

    return (
        <ControlledAccordion {...args} collapsed={accordionCollapsed} setAccordionCollapsed={() => setAccordionCollapsed(!accordionCollapsed)} onClick={callback}/>
    )
}

MenuMode.args = {
    title: 'counter',
    items: [{title: 'hello', value: 13}, {title: 'hey', value: 2}]
}
