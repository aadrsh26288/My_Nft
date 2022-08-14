import React from 'react'
import comunity_bg from '../assets/community.png'
import crr from '../assets/crr.png'
import {BsCart2} from 'react-icons/bs'
import {GiTakeMyMoney} from 'react-icons/gi'
import{ImEarth} from 'react-icons/im'
import {BsFillPersonFill} from 'react-icons/bs'
import Footer from './Footer'
// import ReactPlayer from "react-player"

import Form from './Form'
const Community_page = () => {
  return (
<div className="flex flex-col items-center justify-center text-t-20" >
  {/* <h1 className="text-community-c4 text-4xl font-bold text-center  py-5 font-style_3">Join Our Community</h1> */}


  <div className="text-t-20   w-11/12 mx-auto flex flex-col items-center justify-center mt-8">
 <p className='md:text-4xl text-2xl font-semibold font-signature'>Join our community</p>
 <p className='md:text-6xl text-3xl font-bold font-signature'>The Nft.<span className='text-red'>org</span> Foundation</p>
  </div>

  <div className='mt-10 text-t-20 grid md:grid-cols-2 w-11/12 mx-auto p-4 gap-3'>
    <img src={crr} alt='helloo ' className=''/>
    <div>
      <p className='text-4xl font-semibold'>Get Connected With all around the world</p>
      <p className='text-2xl text-justify mt-5'>The power of community could be unlike anything we’ve seen before, with NFTs affording many artist Apes, for example  the Bored Ape Yacht Club, with its 10,000 members</p>
      <div className="flex gap-3 mt-3">
        <button className='bg-community-c3 text-xl rounded-lg text-center px-4 py-2'>Join Now</button>
        <button className='bg-t-40 text-t-30 rounded-lg text-xl text-center px-4 py-2 w-24'>Chat</button>
      </div>
    </div>
  </div>
{/* about community */}

  <div className='w-11/12 mx-auto text-center mt-8'>
    <div className='flex'>
      <p className='text-4xl font-bold font-signature flex items-center justify-center w-full text-t-20 gap-3 first-letter:text-red'>About Us <BsFillPersonFill className='text-red'/></p>
    </div>
<p className='text-xl px-4 text-justify md:text-center pb-4'>For one thing, NFTs come with the opportunity to make royalties, which are usually between 5 percent and 20 percent based on my experience. Fashion designer Nick Graham, for instance, recently sold an NFT of a bomber jacket to commemorate the Apollo 11 moon landing on Decentraland for 20,000 Mana, their version of cryptocurrency, or $17,000. Creators have the ability to immediately benefit from their art. It revolutionizes how creators can be paid.</p>
  </div>


<div className="mx-auto w-11/12 pb-10">
  <h1 className="text-4xl font-bold font-signature  text-center  mt-10">Why Join Us <span className="text-red">?</span> </h1>

  <div className='flex gap-4 mt-5 md:flex-row flex-col'>

    <div className="border-4 rounded-xl border-t-30">
     <h1 className='text-2xl font-bold bg-w1 p-3 text-center rounded-t-lg'>Large Members</h1>
     <div className='p-3 flex flex-col gap-3 text-xl first-letter:font-semibold'>
     <p className='first-letter:font-semibold'>1. Large Community with 500K Members </p>
     <p className='first-letter:font-semibold'>2. Join Large Groups and connected with people are around world </p>
     <p className='first-letter:font-semibold'>3. Hustlers and technical minds are  best kind of people you would want to interact with.</p>
     </div>
    </div>

    <div className="border-4 rounded-xl border-t-30">
     <h1 className='text-2xl font-bold bg-w2 p-3 text-center rounded-t-lg'>Similar Interests</h1>
     <div className='p-3 flex flex-col gap-3 text-xl first-letter:font-semibold'>
     <p className='first-letter:font-semibold'>1. Members With Similar Interests </p>
     <p className='first-letter:font-semibold'>2. It would help to find new people in this space who share the same interest as you  </p>
     <p className='first-letter:font-semibold'>3. Meet Designers and artists who are constantly motivating and inspiring each other

</p>
     </div>
    </div>

    <div className="border-4 rounded-xl border-t-30">
     <h1 className='text-2xl font-bold bg-w3 p-3 text-center rounded-t-lg'>Get Connected</h1>
     <div className='p-3 flex flex-col gap-3 text-xl first-letter:font-semibold'>
     <p className='first-letter:font-semibold'>1. Large Community with 500K Members </p>
     <p className='first-letter:font-semibold'>2. Discord offers you the chance to create your own customized channel and use it t</p>
     <p className='first-letter:font-semibold'>3.  Join our forums to solve are your doubts.</p>
     </div>
    </div>
  </div>

</div>
 
  <div className='w-11/12 mx-auto p-10 flex flex-col justify-center items-center gap-3 rounded-xl '>
  <h1 className='text-4xl font-signature font-bold'>Get In Touch</h1>
  <div className='flex p-4'>
    <input type='text' placeholder='Gmail...' className='bg-t-30 outline-none p-2 md:w-96 rounded-l-lg'></input>
  <p className='bg-red p-3 px-6 rounded-r-lg cursor-pointer'>Send</p>
  </div>
  </div>


</div>


  )
}

export default Community_page;