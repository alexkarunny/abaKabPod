import React from "react";
import {Story} from '@storybook/react';
import {ControlledAccordion, ControlledAccordionPropsType} from "./ControlledAccordion";

const Template: Story<ControlledAccordionPropsType> = (args) => <ControlledAccordion {...args}/>

export const MenuCollapsed = Template.bind({})

MenuCollapsed.args = {
    title: 'hello',
    collapsed: false,
    //setAccordionCollapsed: setAccordionCollapsed
}