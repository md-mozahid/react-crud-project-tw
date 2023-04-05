import { format } from 'date-fns'
import React, { useContext } from 'react'
import { FaEye, FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ContactContext } from '../contextApi/Contact.Context'

const Contact = ({ contact }) => {
  const { deleteContact } = useContext(ContactContext)
  const { id, firstName, lastName, email, profession, dateOfBirth, image } =
    contact

  const handleDelete = (id) => {
    deleteContact(id)
    toast.success('Delete successfully !', {
      autoClose: 2000,
      hideProgressBar: true,
      theme: 'colored',
    })
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
          <h2>
            Date of Birth:{' '}
            {dateOfBirth instanceof Object
              ? format(dateOfBirth, 'dd/MM/yyyy')
              : dateOfBirth}
          </h2>
        </div>
        <Link to={`/contacts/${id}`}>
          <button type="button">
            <FaEye />
          </button>
        </Link>
        <button type="button" onClick={() => handleDelete(id)}>
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  )
}

export default Contact
