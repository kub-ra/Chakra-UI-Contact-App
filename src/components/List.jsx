import { React, useState } from 'react'
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList, Input, Text, Box
} from '@chakra-ui/react'
import { PhoneIcon, ChatIcon } from '@chakra-ui/icons'

function Lists({ contact }) {
    const [filterText, setFilterText] = useState("");
    const filtered = contact.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLowerCase().includes(filterText.toLocaleLowerCase())
        )
    })
    return (
        <div>
            <Input id='first-name' placeholder='Filter' m="2" onChange={(e) => setFilterText(e.target.value)} name="userName" value={filterText} />

            <UnorderedList>
                {filtered.map((item, key) => (
                    <ListItem display="flex" justifyContent="space-around" key={key}>
                        <Text fontSize='md' fontWeight="600">{item.userName}</Text>
                        <Box w="50px" display="flex" justifyContent="space-around" >
                            <PhoneIcon background="#ffff" color="green" />
                            <ChatIcon />
                        </Box>

                    </ListItem>

                ))}


            </UnorderedList>
            <Box>Kisi Listeniz: {contact.length}</Box>

        </div>
    )
}

export default Lists