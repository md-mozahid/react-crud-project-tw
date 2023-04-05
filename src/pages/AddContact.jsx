import React, { useContext } from 'react'
import ContactForm from '../contacts/ContactForm'
import { ContactContext } from '../contextApi/Contact.Context'

const AddContact = () => {
  const { addContact } = useContext(ContactContext)
  console.log(addContact(data))
  return <ContactForm addContact={addContact} />
}

export default AddContact
