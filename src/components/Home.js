import React from 'react'
import Heroimg from '../assets/hero-image.png'
import jess from '../assets/jess.png'
import hero2 from '../assets/hero-2.png'
import{Link} from 'react-router-dom'
const Home = () => {
  return (
    <div className="bg-black  z-0">
    <div className='bg-gradient-to-r  from-main to-org mx-auto w-11/12  text-white   md:grid grid-cols-2 items-center rounded-lg ' >
   <div className='flex flex-col justify-evenly h-auto   pt-16 ml-4 pl-3 gap-4' >
   <div className=''>
    <p className='font-semibold  tracking-widest text-t-40 '>Welcome</p>
    <h1 className='text-4xl font-semibold text-t-40 font-signature  '>Trade <span className='text-t-60  '>NFTs</span><br></br> with zero fees</h1>
  </div>
  <div className='text-t-40 text-lg'>
    <p>We are the world’s highest-rated <br></br> online marketplace</p>
  </div>
  <div className='flex gap-3 text-t-20'>
 <Link to='/explore'>  <button className='bg-t-50 py-2 px-5 text-center rounded-lg hover:translate-y-3.5 hover:bg-w1 hover:text-t-20 duration-300'>Explore NFTs</button></Link> 
    <button className='py-2 px-5 text-center rounded-lg bg-t-70 text-t-50 hover:translate-y-3.5 hover:bg-w4 hover:text-t-20 duration-300'>Create Your Own</button>
  </div>
  <div className='flex items-center gap-9 lg:mt-11'>
    <img src={jess} alt={jess} className=' h-52' />
   
  <p className='w-2/3 text-t-40 text-lg font-testimonial'>“NFTwow helped me to turn my art from earning the odd $20, to earning over seven figures ”<br></br> <span className='f-right text-lg font-semibold '>-Jess Young</span></p>
 
  </div>

</div>

<div >

  <img src={Heroimg} alt={Heroimg} className="lg:mt-12 hidden md:mt-52 md:flex"/>
 
</div>

    </div>
    </div>
  )
}

export default Home