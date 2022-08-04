import React from 'react'
import comunity_bg from '../assets/community.png'
import{BsPersonFill} from 'react-icons/bs'
import {BsCart2} from 'react-icons/bs'
import {GiTakeMyMoney} from 'react-icons/gi'
import{ImEarth} from 'react-icons/im'
import Form from './Form'
const Community_page = () => {
  return (
<div className={"w-full h-screen bg-[url('assets/community.png')] bg-cover bg-no-repeat"} >
  <h1 className="text-community-c4 text-4xl font-bold text-center  py-5 font-style_3">Join Our Community</h1>

<div className="  ">

{/* <div>
  <img src={comunity_bg} alt='bg'/>
</div> */}

<div className='grid grid-cols-2 gap-4 pr-3 lg:ml-14 '>
      <div className=" ml-3  flex flex-col items-center justify-center rounded-xl  border-b-4 border-t-30 pb-4  duration-300 shadow-md  hover:shadow-custom cursor-pointer hover:border-community-c2 ">
        <BsPersonFill size={120} className="text-t-10 hover:text-i2 duration-300"/>
        <p className='text-t-10 text-4xl font-bold capitalize '>8M+ Members</p>
      </div>

      <div className="border-b-4 ml-3 flex flex-col items-center justify-center rounded-xl pb-4 border-t-30   duration-300 shadow-md  hover:shadow-custom cursor-pointer hover:border-six">
        <BsCart2 size={120} className="text-t-10 hover:text-i2 duration-300"/>
        <p className='text-t-10 text-4xl font-bold capitalize '>1M+ Nft's</p>
      </div>

      <div className="border-b-4 ml-3 flex flex-col items-center justify-center rounded-xl pb-4 border-t-30   duration-300 shadow-md  hover:shadow-custom cursor-pointer hover:border-purple ">
        <GiTakeMyMoney size={120} className="text-t-10 hover:text-i2 duration-300"/>
        <p className='text-t-10 text-4xl font-bold capitalize '>150k+ Spend</p>
      </div>

      <div className="border-b-4 ml-3 flex flex-col items-center justify-center rounded-xl pb-4 border-t-30   duration-300 shadow-md  hover:shadow-custom cursor-pointer hover:border-gold">
        <ImEarth size={120} className="text-t-10 hover:text-i2 duration-300"/>
        <p className='text-t-10 text-4xl font-bold capitalize '>350k+ Bidders</p>
      </div>

 </div>




</div>
<div >

</div>

</div>
  )
}

export default Community_page