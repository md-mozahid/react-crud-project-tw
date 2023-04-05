import React, { useContext } from 'react'
import { ContactContext } from '../contextApi/Contact.Context'
import { useParams } from 'react-router-dom'
import ContactForm from '../contacts/ContactForm'

const EditContact = () => {
  const { contacts, updateContact } = useContext(ContactContext)
  const {id} = useParams()

  const foundContact = contacts.find(contact => contact.id === id)
  return <ContactForm foundContact={foundContact} updateContact={updateContact} />
}

export default EditContact
