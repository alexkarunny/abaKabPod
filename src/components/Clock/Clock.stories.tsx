import {Story} from "@storybook/react";
import {Clock} from "./Clock";


export default {
    title: 'Clock',
    component: Clock
}

const Template: Story = (args) => <Clock {...args}/>

export const NewClock = Template.bind({})
