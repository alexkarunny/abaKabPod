import React from "react";
import {UncontrolledAccordion, UncontrolledAccordionPropsType} from "./UncontrolledAccordion";
import {Meta, Story} from "@storybook/react";

export default  {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
} as Meta;

const Template : Story<UncontrolledAccordionPropsType> = (args) => <UncontrolledAccordion {...args} />



export const AccordionMode = Template.bind({})

AccordionMode.args = {
    title: "Grt"
}
