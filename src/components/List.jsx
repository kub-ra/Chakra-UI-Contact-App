import { React, useState } from 'react'
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList, Input
} from '@chakra-ui/react'

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
                    <ListItem key={key}>{item.userName}:{item.phoneNumber}</ListItem>

                ))}


            </UnorderedList>
            {contact.length}
        </div>
    )
}

export default Lists