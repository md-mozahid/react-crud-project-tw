// import { yupResolver } from '@hookform/resolvers/yup'
import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
// import * as yup from 'yup'
import DatePicker from 'react-datepicker'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'
import { ContactContext } from '../contextApi/Contact.Context'
import { toast } from 'react-toastify'

const ContactForm = ({ foundContact, updateContact }) => {
  const { addContact } = useContext(ContactContext)
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    // resolver: yupResolver(schema),
  })

  const navigate = useNavigate()

  // default value
  const defaultValue = {
    firstName: foundContact?.firstName || 'Md',
    lastName: foundContact?.lastName || 'Muzahid',
    email: foundContact?.email || 'ce.muzahid@gmail.com',
    profession: foundContact?.profession || 'Developer',
    image:
      foundContact?.image || 'https://randomuser.me/api/portraits/men/75.jpg',
    dateOfBirth:
      (foundContact?.dateOfBirth && new Date(foundContact.dateOfBirth)) ||
      new Date(),
  }
  const { firstName, lastName, email, profession, image, dateOfBirth } =
    defaultValue

  const [birthYear, setBirthYear] = useState(
    dateOfBirth ? dateOfBirth : new Date()
  )

  useEffect(() => {
    setValue('dateOfBirth', birthYear)
  }, [birthYear])

  const onSubmit = (data) => {
    const id = foundContact?.id

    if (id) {
      updateContact(data, id)
      toast.success('Updated successfully !', {
        autoClose: 2000,
        hideProgressBar: true,
        theme: 'colored',
      })
    } else {
      addContact(data)
      toast.success('Added successfully !', {
        autoClose: 2000,
        hideProgressBar: true,
        theme: 'colored',
      })
    }
    navigate('/contact')
  }

  return (
    <div className="bg-gray-200 w-96 mx-auto">
      <h1 className="text-4xl">
        {foundContact?.id ? 'Edit Contact' : 'Add Contact'}
      </h1>
      <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="firstName"
          placeholder="First name"
          // errors={errors}
          register={register}
          defaultValue={firstName}
        />
        <Input
          name="lastName"
          placeholder="Last name"
          // errors={errors}
          register={register}
          defaultValue={lastName}
        />
        <Input
          name="email"
          placeholder="Email"
          // errors={errors}
          register={register}
          defaultValue={email}
        />
        <Input
          name="profession"
          placeholder="Profession"
          // errors={errors}
          register={register}
          defaultValue={profession}
        />

        <Input
          name="image"
          placeholder="image"
          // errors={errors}
          register={register}
          defaultValue={image}
        />
        <DatePicker
          selected={birthYear}
          name="dateOfBirth"
          id="dateOfBirth"
          placeholder="Enter your Date of Birth"
          maxDate={new Date()}
          showYearDropdown
          onChange={(date) => setBirthYear(date)}
        />

        <Button type="submit" className="btn btn-fw">
          {foundContact?.id ? 'Update Contact' : 'Add Contact'}
        </Button>
      </form>
    </div>
  )
}

export default ContactForm
