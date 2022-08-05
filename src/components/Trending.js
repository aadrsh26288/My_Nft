import React from 'react'
import {data} from '../assets/data'
import t_1 from '../assets/t-1.png'
import Eth from '../assets/eth.png'
import {data2} from '../assets/data'
const Trending = () => {
  return (
    <div>
      
     <div className='bg-black mt-20'>
      <div className=' mx-auto w-11/12 grid lg:grid-cols-2 bg-black gap-6'>

      <div className='parent '>
         <div className='flex  items-center justify-between border-b-2 border-t-10  bg-org rounded-lg py-2'>
          <div className='ml-2'>
           <p className=' text-2xl text-t-80 font-semibold'>Top & Trending</p>
          <p className=' text-primary'>See what’s hot in the world of non-fungibles.</p>
          </div>
          <div>
            <button className='text-t-40 bg-t-30  px-3  mr-2 p-1 rounded-md'>Explore</button>
          </div>
        </div>
        
{
  data.map((m)=>{
    const {id,name,p,img,e,l_price} = m;
    return(
      
      <div className='flex w-full border-b-2 justify-between  text-t-10 py-4 px-2 bg-org rounded-b-lg ' key={id}>
      <div className=' text-white flex items-center gap-2' >
        <img src={img} alt={t_1} className='h-12' />
        <div>
        <p className='text-t-80 font-semibold'>{name}</p>
        <p className='  flex items-center text-slate-400 lg:text-1xl'>lowest price: <img src={Eth} alt={Eth} className='h-4 pr-1 pl-1'/>{l_price}</p>
        </div>        
        </div>
        <div>
       <p className={p<10?'text-red':'text-green'}>{p}%</p>
        <p className='flex items-center  text-center text-slate-400'><img src={Eth} alt={Eth} className='h-6 pr-1'/>{e}</p>
        </div>
        
    </div>
  
    )
  })
}
</div>
      

       
       

<div className='parent '>
         <div className='flex items-center justify-between  border-b-2 border-t-10  bg-org rounded-lg py-2'>
          <div className='ml-2'>
           <p className='text-2xl text-t-80 font-semibold'>New & Noteworthy</p>
          <p className=' text-primary'>See what’s up and coming this week.</p>
          </div>
          <div>
            <button className='text-t-40 bg-t-30  px-3 mr-2 p-1 rounded-md'>Explore</button>
          </div>
        </div>
        
{
  data2.map((mm)=>{
    const {id,name,p,img,e,l_price} = mm;
    return(
      
      <div className='flex w-full border-b-2 justify-between b text-t-10 py-4 px-2 bg-org rounded-b-lg ' key={id}>
      <div className=' text-white flex items-center gap-2 ' >
        <img src={img} alt={t_1} className='h-12' />
        <div>
        <p className='text-t-80 font-semibold'>{name}</p>
        <p className='flex items-center pr-1 text-slate-400'>lowest price: <img src={Eth} alt={Eth} className='h-4 pr-1 pl-1'/>{l_price}</p>
        </div>        
        </div>
        <div>
       <p className={p<10?'text-red':'text-green'}>{p}%</p>
        <p className='flex items-center text-1xl text-center text-slate-400'><img src={Eth} alt={Eth} className='h-6 pr-1'/>{e}</p>
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

export default Trending