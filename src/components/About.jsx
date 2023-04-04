import React from 'react'
import image from '../assets/img/team/team-1.jpg'

const About = () => {
  return (
    <>
      <div className="container mx-auto w-9/12 text-center">
        <h1 className=" mt-5 text-3xl">About Us</h1>
        <p>
          Architecto nobis eos vel nam quidem vitae temporibus voluptates qui
          hic deserunt iusto omnis nam voluptas asperiores sequi tenetur dolores
          incidunt enim voluptatem magnam cumque fuga.
        </p>
        <div className="flex justify-center mt-5">
          <div className="mt-5">
            <img className=" h-auto" src={image} alt="" />
          </div>
          <div className="ml-5 text-start">
            <h3 className="text-2xl mt-3">
              Neque officiis dolore maiores et exercitationem quae est seda
              lidera pat claero
            </h3>
            <div className="font-medium mt-5">
              <button className=" ">About1</button>
              <button className="mx-5 ">About2</button>
              <button className=" ">About3</button>
            </div>
            <hr />
            <div>
              <p>
                Consequuntur inventore voluptates consequatur aut vel et. Eos
                doloribus expedita. Sapiente atque consequatur minima nihil quae
                aspernatur quo suscipit voluptatem.
              </p>
            </div>
            <div className='mt-5'>
              <h3 className='font-medium'>Repudiandae rerum velit modi et officia quasi facilis</h3>
              <p>
                Laborum omnis voluptates voluptas qui sit aliquam blanditiis.
                Sapiente minima commodi dolorum non eveniet magni quaerat nemo
                et.
              </p>
            </div>
            <div className='mt-5'>
              <h3 className='font-medium'>Repudiandae rerum velit modi et officia quasi facilis</h3>
              <p>
                Laborum omnis voluptates voluptas qui sit aliquam blanditiis.
                Sapiente minima commodi dolorum non eveniet magni quaerat nemo
                et.
              </p>
            </div>
            <div className='mt-5'>
              <h3 className='font-medium'>Repudiandae rerum velit modi et officia quasi facilis</h3>
              <p>
                Laborum omnis voluptates voluptas qui sit aliquam blanditiis.
                Sapiente minima commodi dolorum non eveniet magni quaerat nemo
                et.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
