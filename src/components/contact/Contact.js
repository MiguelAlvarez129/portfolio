import React, {forwardRef} from 'react'
import { AnimatedButton } from '../../styles'
import {Wave} from 'react-wavify'
import {Box, VStack, Flex, Heading, Image, Text, Textarea} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import confetti from '../../assets/img/confetti2.svg'
import carta from '../../assets/img/carta.png'
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
  } from '@chakra-ui/react'
import { AnimationContext } from '../../animationContext'
import {motion} from 'framer-motion'

const Contact = forwardRef((props,ref) => {


    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting, isValid },
      } = useForm({mode:'onChange'})
    
    const onSubmit = (values) =>{
        console.log(values)
    }
  return (

        <Box  ref={ref} id='fourth-div' minH={'100vh'} >
            <motion.div initial={{opacity:0,y:-50}} animate={props.value === 'fourth-div' && {opacity:1, y:0}} transition={{delay:.2, ease:'easeInOut'}}>
                <VStack justify={'center'} h={'fit-content'}  minH={'100vh'} p={{base:0,sm:'5px 5vw'}}>
                <Heading as={'h3'} size='xl' color={'#add0ff96'} alignSelf={'start'}>
                    Get in Touch
                </Heading>  
                    <Flex h={'fit-content'} w={'full'} direction={{base:'column',lg:'row'}}  p={{base:'1em',sm:'30px'}}>
                            <VStack  w={'full'} p={'10px 20px'}  bg={'#0b0155a3'} justify={'center'} borderRadius={'4px'}>
                                <Image  src={carta} w={'20vw'} minW={'200px'}/>
                                <Text fontSize={{base:'xl',lg:'3xl'}} color={'#c6cfff'} textAlign='center'>
                                    Wanna contact me? 
                                </Text>
                            </VStack>
                            <VStack   w={'full'} bg={'#04004570'} borderRadius={'4px'} p={{base:'1em',sm:'4em'}}>
                                <form onSubmit={handleSubmit(onSubmit)} noValidate style={{width:'100%'}}>
                                    <Box h={'fit-content'} color={'#c6cfff'} >
                                    <FormControl isInvalid={errors.name} isRequired >
                                        <FormLabel htmlFor='name'>Name</FormLabel>
                                        <Input
                                        id='name'
                                        bg={'#f2f2f2'}
                                        color={'black'}
                                        placeholder='name'
                                        {...register('name', {
                                            required: 'This is required', 
                                        })}
                                        />
                                        <FormErrorMessage>
                                        {errors.name && errors.name.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                    <FormControl isInvalid={errors.email} isRequired >
                                        <FormLabel htmlFor='email'>Email</FormLabel>
                                        <Input
                                        bg={'#f2f2f2'}
                                        color={'black'}
                                        id='email'
                                        placeholder='email'
                                        {...register('email', {
                                            required: 'This is required', 
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "invalid email address"
                                            }
                                        })}
                                        />
                                        <FormErrorMessage>
                                        {errors.email && errors.email.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                    <FormControl isInvalid={errors.message} isRequired >
                                        <FormLabel htmlFor='message'>Message</FormLabel>
                                        <Textarea
                                        id='message'
                                        bg={'#f2f2f2'}
                                        color={'black'}
                                        resize={'none'}
                                        placeholder='message'
                                        {...register('message', {
                                            required: 'This is required', 
                                        })}
                                        />
                                        <FormErrorMessage>
                                        {errors.message && errors.message.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                    <AnimatedButton disabled={!isValid} size='lg' color='white' margin={'10px 0'}  colorScheme='blackAlpha' border="white 2px solid" type={'submit'}>
                                        Submit
                                    </AnimatedButton>
                                    </Box>
                                    
                                </form>
                            </VStack>    
                        </Flex>
                </VStack>
            </motion.div>
        </Box>

  )
})

export default Contact