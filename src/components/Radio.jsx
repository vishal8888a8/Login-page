import {Box,HStack} from '@chakra-ui/react'
import { useRadio,useRadioGroup } from '@chakra-ui/react'

function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()
  
    return (
      <Box as='label'>
        <input {...input} />
        <Box
          {...checkbox}
          className="radio_box"
          cursor='pointer'
          borderWidth='1px'
          borderRadius='2px'
          boxShadow='md'
          backgroundColor='#F0F0F0'
          color="#5A5A5A"
          _checked={{
            bg: '#3766E8',
            color: 'white',
            borderColor: 'teal.600',
          }}
          _focus={{
            // boxShadow: 'outline',
          }}
          px={0.5}
          py={0.5}
        >
          {props.children}
        </Box>
      </Box>
    )
  }
  
function Radio() {
    const options = ['1-20', '21-50', '50-200','200-500','500+']
  
    const { getRootProps, getRadioProps } = useRadioGroup({
      name: 'framework',
      defaultValue: 'react',
      onChange: console.log,
    })
  
    const group = getRootProps()
  
    return (
      <HStack {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value })
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          )
        })}
      </HStack>
    )
}
  
export default Radio;