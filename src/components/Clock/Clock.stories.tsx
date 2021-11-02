import {Clock, ClockPropsType} from "./Clock";
import {Story} from "@storybook/react";

export default {
    title: 'Clock',
    component: Clock
}

const Template: Story<ClockPropsType> = (args) => <Clock {...args}/>

export const NewClock = Template.bind({})
