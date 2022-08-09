import React from 'react'
import footer from '../assets/footer.png'
import {BsLinkedin} from 'react-icons/bs'
import {ImTwitter} from 'react-icons/im'
import {FaFacebookSquare} from 'react-icons/fa'
import {IoLogoYoutube} from 'react-icons/io'
import { Link } from 'react-router-dom';




const Footer = () => {
  return (
    <div className='mt-10 text-t-80'>
        <div className="mx-auto w-11/12 text-white grid lg:grid-cols-2 gap-3">
            <div className=" flex items-center">
                <div>
                    <img src={footer} alt={footer} className="lg:h-36 w-60 "/>
                </div>
                <div className='ml-3'>
                    <p className='lg:w-full mb-3 lg:text-xl'>Nec, enim sed lacus, magna pharetra. Phasellus tincidunt nulla pharetra gravida est. </p>
                    <div className='flex gap-14 '>
                      <BsLinkedin size={40 } className='rounded-md '/>
                      {/* <ImTwitter size={30} className=' rounded-md text-twitter'/> */}
                      <FaFacebookSquare size={40} className='rounded-md  '/>
                      <IoLogoYoutube size={45} className=' rounded-md'/>
                    </div>
                </div>
            </div>


            <div className=" grid grid-cols-2 content-center items-center place-items-center  ">
                <div className='text-center '>
                <p className='p-3 font-bold text-2xl lg:p-2'>About us</p>
                    <p className='p-3 lg:p-2'>About NFT</p>
                    <p className='lp-3 lg:p-2'>Live Auctions</p>
                    <p className='p-3 lg:p-2'>NFT Blog</p>
                    <p className='p-3 lg:p-2'>Activity</p>
                </div>

                <div className='text-center p-6 '> 
                    <p className='p-3 font-bold text-2xl lg:p-2'>About us</p>
                    <p className='p-3 lg:p-2'>Explore</p>
                    <Link to='/community'><p className='p-3 lg:p-2'>Community</p></Link>  
                    <p className='p-3 lg:p-2'>Create</p>
                    <Link to='/community'><p className='p-3 lg:p-2'>Sign up</p></Link>  
                    
                </div>

            </div>

        </div>
    </div>
  )
}

export default Footer