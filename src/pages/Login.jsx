import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import Image from '../assets/img/services-6.jpg'

const schema = yup.object({
  email: yup
    .string()
    .email('Must be valid email')
    .lowercase()
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
      'Min 6 Characters, Uppercase, Lowercase, Number and Special Character'
    ),
})

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    isSubmitting,
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  return (
    <>
      <div className="container-fluid h-screen  bg-gray-500">
        <h1 className="flex justify-center items-center text-5xl pt-5">
          Login
        </h1>
        <div className="flex justify-around mt-10">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <label htmlFor="email">Email :</label>
            <input
              className="inputText"
              name="email"
              id="email"
              placeholder="Email*"
              errors={errors}
              {...register('email')}
            />
            <label htmlFor="password">Password :</label>
            <input
              className="inputText"
              name="password"
              id="password"
              placeholder="Password*"
              {...register('password')}
            />

            <button type="submit" className="btn-primary btn-fw">
              Login
            </button>
            <div className="flex justify-center gap-5 text-white mt-3">
              <p>
                Forgot password <a className='text-blue-600' href="">Click here</a>
              </p>
              <p>
                New user ! <Link className='text-blue-600' to="/registration">Create account</Link>
              </p>
            </div>
          </form>

          <div>
            <img className="w-72" src={Image} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
