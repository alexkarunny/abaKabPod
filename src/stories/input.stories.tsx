import React, {ChangeEvent, useRef, useState} from 'react';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'uncontrolledInput',
  //component: Button,

} as Meta;

const Template: Story = () => <input />;

export const UncontrolledInput = Template.bind({})

export const ControlledInputWithFixedValue: Story = () => <input value={'kamas'} />

export const ControlValueOfUncontrolledInput: Story = () => {
  const [value, setValue] = useState('')
  const changeVal = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  return <div><input onChange={changeVal}/>----{value}</div>
}

export const GetValueOfUncontrolledInputByKeyPress: Story = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const save = () => {
    const el = inputRef.current as HTMLInputElement
    setValue(el.value)

  }

  return <div><input ref={inputRef}/> <button onClick={save}>save</button>----value: {value}</div>
}

