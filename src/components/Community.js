import React from 'react'
import { Link } from 'react-router-dom';




import create from '../assets/create.png'
const Community = () => {
  return (
    <div className='text-t-80 mt-20'>
        <div className="w-11/12 mx-auto grid rounded-lg lg:grid-cols-2 md:grid-cols-2 gap-4 items-center bg-gradient-to-r from-org to-third">
    <div className='flex flex-col gap-5 lg:ml-16 lg:mt-14 mt-10 pl-5 '>
      <div>
        <h1 className='text-white lg:text-5xl text-2xl font-semibold'><span className='font-signature  text-t-10'>Discover,</span> Collect &<br></br> Create your own NFT </h1>
        <p className='font-lg pt-3'>Search items, collection, accounts</p>
      </div>
      <div className='flex gap-3'>
   <Link to='/Community'>  <button className='bg-custom py-2 px-5 text-center rounded-lg'>Community</button></Link>   
        <button className='bg-third py-2 px-10 text-center rounded-lg'>Create</button>
      </div>

    </div>


    <div className=''>
      <img src={create} alt={create} className=' lg:h-96 lg:flex hidden  md:h-50 md:flex' />

    </div>

        </div>
    </div>
  )
}

export default Community