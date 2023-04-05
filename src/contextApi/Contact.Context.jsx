import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { UserData } from '../userData/UserData'

// create context
export const ContactContext = createContext()

// create context provider
export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState(UserData)

  // delete contact
  const deleteContact = (id) => {
    const filteredContact = contacts.filter((contact) => contact.id !== id)
    setContacts(filteredContact)
  }

  // add contact
  const addContact = (contact) => {
    let contactToAdd = {
      id: uuidv4(),
      ...contact,
    }
    setContacts([contactToAdd, ...contacts])
  }

  // update contact
  const updateContact = (updatedContact, id) => {
    const contactsWithUpdate = contacts.map((contact) => {
      if (contact.id === id) {
        return {
          id,
          ...updatedContact
        } 
      } else {
          return contact
        }
    })
    setContacts(contactsWithUpdate)
  }

  const value = {
    contacts,
    deleteContact,
    addContact,
    updateContact
  }
  return (
    <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
  )
}
