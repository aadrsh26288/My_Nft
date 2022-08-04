import React from 'react'
import {Creators} from '../assets/data'
import { Categories} from '../assets/data'
const Section = () => {
  return (
<div className="mt-5 text-t-40" >
  <div className="mx-auto w-11/12 bg-gray-900 mt-5 p-5  grid lg:grid-cols-2 gap-5">
    <div>
    <h1 className="text-3xl text-white font-semibold">Top Creators</h1>
    <div className='mt-4 bg-org'>


    {
      Creators.map((c) =>{
        const{id,name,email,img}=c;
        return (
          <div className='flex border-b-2 rounded-lg items-center gap-2  justify-between' key={id}>
          <div className="flex gap-2 items-center ">
          <div>
            <img src={img} alt={img} className='h-14 rounded-full border-2 my-2'/>
          </div>
    
          <div>
            <p className="text-white text-2xl font-bold">{name}</p>
            <p  className='text-white'>{email}</p>
            </div>
    
            </div>
    
            <div>
              <button className='p-3 text-white bg-t-30 rounded-lg'>Follow</button>
            </div>
    
        </div>
        )

      })
    }

<div>

</div>


    </div>
    </div>

<div>
<h1 className="text-3xl text-white font-semibold">Categories</h1>

<div className='grid grid-cols-2  w-auto
gap-3 items-center  '>

    {
       Categories.map((j)=>{
        const {id,Name,items,img}=j;
        return (
          <div className="mt-6 ">

          <div className=' bg-org flex flex-col lg:w-64 lg:h-46 rounded-lg border-2 border-t-100 items-center pb-2 '
          key={id} >
          <div className='flex items-center '>
            <img src={img} alt={img} className='lg:h-36 lg:w-60 my-2 mx-2  rounded-lg w-32 sm:w-60'/>
          </div>
          <div className='flex text-black items-center justify-between px-3 lg:w-56 w-32  md:w-52'>
            <p className= ' lg:text-xl font-semibold text-xs sm:text-2xl'>{Name}</p>
            <p className='lg:text-lg text-xs'>3.44</p>
          </div>
    
          </div>
        
    
        </div>
    
       
        )
       })
    }
    </div>

   


  </div>
</div>
</div>
      
 
  )
}

export default Section