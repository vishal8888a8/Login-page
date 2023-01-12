import React from 'react'
import { Input,Text,Select,Button } from '@chakra-ui/react'
import Radio from './Radio'

export default function Body() {
  return (
    <div className='body_container'>
        <div className='item1'>
        <Text mb='1'>Company name</Text>
        <Input placeholder='e.g Example inc.' width='100%'/>
        </div>

        <div className='item2'>
        <Text mb='1'>Industry</Text>
        <Select placeholder='Select option' opacity={0.7}>
            <option value='option1'>Education</option>
            <option value='option2'>IT field</option>
            <option value='option3'>Teaching</option>
        </Select>
        </div>

        <div className='item3'>
        <Text mb='1'>Company Size</Text>
        <Radio />
        </div>

        <div className='item4'>
        <Button colorScheme='blue' width='100%'>Get Started!</Button>
        </div>
    </div>
  )
}
