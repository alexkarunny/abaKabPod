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

export const ControlledInput: Story = () => {
  const [value, setValue] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  return (
      <input value={value} onChange={onChange}/>
  )
}

export const ControlledCheckbox: Story = () => {
  const [value, setValue] = useState<boolean>(false)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.checked)
  }

  return (
      <input type='checkbox' checked={value} onChange={onChange}/>
  )
}

export const ControlledSelect: Story = () => {
  const [value, setValue] = useState<string | undefined>(undefined)
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.currentTarget.value)
  }

  return (
      <select value={value} onChange={onChange}>
        <option value={'1'}>None</option>
        <option value={'2'}>Minsk</option>
        <option value={'4'}>Lvov</option>
      </select>
  )
}