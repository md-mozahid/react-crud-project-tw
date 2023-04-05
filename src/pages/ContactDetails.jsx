import React, { useContext, useEffect, useState } from 'react'
import { FaPencilAlt, FaRegTrashAlt } from 'react-icons/fa'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ContactContext } from '../contextApi/Contact.Context'

const ContactDetails = () => {
  const { contacts, deleteContact } = useContext(ContactContext)
  const [contact, setContact] = useState({})
  const { firstName, lastName, email, profession, dateOfBirth, image } = contact

  const { id } = useParams()
  const navigate = useNavigate()

  const foundContact = contacts.find((contact) => contact.id === id)

  useEffect(() => {
    if (id && foundContact) {
      setContact(foundContact)
    }
  }, [id])

  const handleDelete = (id) => {
    deleteContact(id)
    toast.success('Delete successfully !', {
      autoClose: 2000,
      hideProgressBar: true,
      theme: 'colored',
    })

    navigate('/contact')
  }
  return (
    <div className="bg-gray-200 max-w-2xl mx-auto">
      <div className="flex items-center p-4 space-x-5">
        <div>
          <img className="w-48 h-48 rounded-full" src={image} alt="" />
        </div>
        <div>
          <h1>First name: {firstName}</h1>
          <h2>Last name: {lastName}</h2>
          <h2>Email: {email}</h2>
          <h2>Profession: {profession}</h2>
          <h2>Date of Birth: {dateOfBirth}</h2>
        </div>
        <Link to={`/edit-contact/${id}`}>
          <button type="button">
            <FaPencilAlt />
          </button>
        </Link>
        <button type="button" onClick={() => handleDelete(id)}>
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  )
}

export default ContactDetails
