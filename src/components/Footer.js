import React from 'react'
import footer from '../assets/footer.png'
import {BsLinkedin} from 'react-icons/bs'
import {ImTwitter} from 'react-icons/im'
import {FaFacebookSquare} from 'react-icons/fa'
import {IoLogoYoutube} from 'react-icons/io'
import { Link } from 'react-router-dom';
import flogo from '../assets/flogo.png'
import logo from '../assets/mark.png'
// import{Link} from 'react-router-dom'





const Footer = () => {
  return (
    <div className='mt-10 text-t-80 contrast-200'>
        <div className="mx-auto w-11/12 text-white ">
           <div className='mt-3 '> 
            {/* <img src={logo} alt={logo} className='  pt-4'/> */}
            <p className='w-full h-1 bg-t-80 mt-4'></p>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p> */}
           </div>

<div className='flex justify-between md:gap-4 gap-2 md:flex-row flex-col'>
<div className="flex justify-between items-center mt-4  w-full px-3 md:mb-6">
          <div className='flex flex-col gap-5 justify-start'>
           <h1 className="first-letter:text-red font-bold md:text-2xl text-lg">Nft's</h1>
           <p>Top</p>
           <p>Offers</p>
           <p>Trending</p>
           <p>New</p>
           </div>


           <div className='flex flex-col gap-5'>
           <h1 className="first-letter:text-red font-bold md:text-2xl text-lg">Company</h1>
           <p>About</p>
       <Link to='/contact'> <p>Contact Us</p></Link>   
       <Link to='/myarticles'> <p>Articles</p></Link>   
           <p>News</p>
           </div>

           <div className='flex flex-col gap-5'>
           <h1 className="first-letter:text-red font-bold md:text-2xl text-lg">Support</h1>
           <p>Upi</p>
       <Link to='/wallet'> <p>Wallet</p></Link>   
           <p>Paypal</p>
           <p>Crypto</p>
           </div>

           <div className='md:flex flex-col gap-5 hidden'>
           <h1 className="first-letter:text-red font-bold md:text-2xl text-lg">Downloads</h1>
           <p>Android</p>
           <p>Ios</p>
           <p>Mac</p>
           <p>Chrome</p>
           </div>
          </div>  

          <div className=' mt-4 p-3'>
           <h1 className='text-xl font-bold'>Subscribe to Get latest Upadtes And News</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma</p>
           <div className='flex flex-col gap-3 mt-3 '>
            <input type="text" placeholder="Email..." className='p-3 rounded-lg outline-none text-w4 '/>
            <button className='p-3 bg-t-30 rounded-lg'>Subscribe</button>
           </div>
          </div> 

          </div>

          </div>

          <div className='mt-3 pb-5'>
          <p className=' h-1 bg-t-80 mt-4 mx-auto w-11/12'></p>
       
          <div className='flex justify-between w-11/12 mx-auto mt-3 '>  
             <p className='pr-6 text-justify'>Copyright <span className='text-red'>©</span> 2022 Adarsh Msihra| All Rights Reserved </p>
             <div className='flex gap-4 items-center '>
             <a href='https://www.linkedin.com/feed/' target='_blank'><BsLinkedin size={20} /></a>  
             <a href='https://www.twitter.com' target='_blank'> <ImTwitter size={20}/></a>  
             <a href='https://www.facebook.com' target='_blank'> <FaFacebookSquare size={20}/></a>  
             <a href='https://www.youtube.com' target='_blank'> <IoLogoYoutube size={20}/></a>  
             </div>
          </div>


          </div>

  
    </div>
  )
}

export default Footer