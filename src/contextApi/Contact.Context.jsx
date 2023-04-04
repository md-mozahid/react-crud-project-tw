import { createContext, useState } from 'react'
import { UserData } from '../components/userData/UserData'

// create context
export const ContactContext = createContext()

// create context provider
export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState(UserData)

  // add contact
  const addContact = (contact) => {
    let contactToAdd = {
      id: uuidv4(),
      ...contact,
    }
    setContacts([contactToAdd, ...contacts])

    toast.success('Contact add successfully !', {
      autoClose: 1000,
      hideProgressBar: true,
      theme: 'colored',
    })
  }

  const value = {
    contacts,
    value: 10,
  }
  return (
    <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
  )
}
