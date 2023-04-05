// import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
// import * as yup from 'yup'
import Button from '../components/Button'
import Input from '../components/Input'

const ContactForm = ({ addContact }) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    // resolver: yupResolver(schema),
  })

  // default value
  const defaultValue = {
    firstName: 'Md',
    lastName: 'Muzahid',
    email: 'ce.muzahid@gmail.com',
    profession: 'Developer',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    dateOfBirth: '10/10/2020',
  }
  const { firstName, lastName, email, profession, image } = defaultValue

  const onSubmit = (data) => {
    console.log(data)
    addContact(data)
  }

  return (
    <div className="bg-gray-200 w-96 mx-auto">
      <h1 className="text-4xl">Add Contact</h1>
      <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="First Name"
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

        <Button type="submit" className="btn btn-fw">
          Add contact
        </Button>
      </form>
    </div>
  )
}

export default ContactForm
