import { React, useState, useEffect } from 'react'
import { Text, Box } from '@chakra-ui/react'
import Lists from './List'
import Form from './Form'

function Context() {
    const [contact, setContact] = useState([]);
    useEffect(() => {
        console.log(contact);

    }, [contact])

    return (
        <div>
            <Box padding="5" paddingTop="1" boxShadow='lg' p='6' rounded='md' bg='white' m="5">
                <Text
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                    fontSize="6xl"
                    fontWeight="extrabold"
                    marginBottom="5"
                >
                    Contact List App
                </Text>
                <Lists contact={contact} />
                <Form addContact={setContact} contacts={contact} />
            </Box>

        </div>
    )
}

export default Context