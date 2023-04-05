import React, { useContext } from 'react'
import { ContactContext } from '../contextApi/Contact.Context'
import Contact from './Contact'

const Contacts = () => {
  const { contacts } = useContext(ContactContext)
  return (
    <>
      <h2 className="text-center">All Contacts</h2>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </>
  )
}

export default Contacts
