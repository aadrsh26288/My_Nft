import React,{useState} from 'react'
import p_1 from '../assets/p-1.png'
import {collections} from '../assets/data'
import{AiOutlineHeart} from 'react-icons/ai'
import { Link,useParams } from 'react-router-dom';

const Collection = () => {


  return (
<>

<div className="mt-20">
  <div className='mx-a uto w-11/12 relative '>
   
    <h1 className='text-white  z-10 h-auto w-auto'>Top Collections</h1>
  </div>

  <div className="bg-gray-900 mx-auto w-11/12 flex overflow-x-scroll overflow-y-hidden p-5 row-posters ">
{collections.map((c)=>{
const {id,name,img,ui,like,creator}=c;


return (

  
  <div className="text-t-10  inline-block px-3  py-3" >
  <div key={id} className='w-72 border-b-4 bg-org p-3 rounded-lg'>

    <div className=''>
      <img src={img} alt={p_1} className='  rounded-lg' />
    </div>

    <div className='flex  items-center justify-between'>

<div className='flex mx-1 mt-2'>
      <div className=''>
        <img src={ui} alt={p_1} className='h-14 border-2 rounded-full'/>
      </div>
      <div className='pl-3'>
             <p className='text-t-20 font-semibold'>{name}</p>
             <p>by @{creator}</p>
      </div>
      </div>
      <div className='pr-3'>
        <AiOutlineHeart className='cursor-pointer hover:text-red' key={id}  />
        <p className='text-red'>{like}</p>
      </div>
      </div>
 <div>
  
  <Link to={`/create/${c.id}`}><button className='p-3 text-center  bg-main hover:bg-purple duration-200 w-full mt-2 px-5 rounded-lg text-t-80 '>Collect Now</button></Link>
  
  </div>
 

  </div>
</div>


)
})}





  </div>
</div>
     

</>
  )
}

export default Collection