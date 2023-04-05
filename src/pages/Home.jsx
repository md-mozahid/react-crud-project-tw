import React, { useContext } from 'react'
import { ContactContext } from '../contextApi/Contact.Context'

const Home = () => {
  const { value } = useContext(ContactContext)
  return <div className="text-center text-lg">Home page {value}</div>
}

export default Home
