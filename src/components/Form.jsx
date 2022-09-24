import { React, useState, useEffect } from 'react'
import { FormControl, Input, Button } from '@chakra-ui/react';
// import { PhoneIcon } from '@chakra-ui/icons'

function Form({ addContact, contacts }) {
    const initialValue = { userName: "", phoneNumber: "" }
    const [form, setForm] = useState(initialValue);
    useEffect(() => {
        setForm(initialValue)
    }, [contacts])

    const changeValue = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const submitValue = (e) => {
        e.preventDefault();
        if (form.phoneNumber === "" || form.userName === "") {
            return false;
        }
        addContact([...contacts, form])
    }
    return (
        <div>
            <FormControl isRequired marginTop="50px" >
                <Input id='first-name' placeholder='Full Name' m="2" onChange={changeValue} name="userName" value={form.userName} />
                <Input id='tel-Number' placeholder='Phone Number' m="2" onChange={changeValue} name="phoneNumber" value={form.phoneNumber} />
                <Button
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    color="white"
                    m="2"
                    type="submit" id='submit' onClick={submitValue} >Add</Button>
            </FormControl>
        </div >
    )
}

export default Form