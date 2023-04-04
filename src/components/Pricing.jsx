import React from 'react'

const Pricing = () => {
  return (
    <>
      <div className="bg-slate-200 w-56 text-center mt-5 rounded-md">
        <div className="bg-gray-300">
          <h1 className="text-3xl p-4">Free Plan</h1>
          <h2>$0 / month</h2>
        </div>
        <div className="p-4 text-start">
          <span>Quam adipiscing vitae proin</span>
          <span>Nec feugiat nisl pretium</span>
          <span>Nulla at volutpat diam uteera</span>
          <span>Nulla at volutpat diam uteera</span>
          <span>Nulla at volutpat diam uteera</span>
        </div>
        <button className='bg-rose-400 px-5 py-1 rounded-md text-white mb-8 mt-5'>Buy Now</button>
      </div>
    </>
  )
}

export default Pricing
