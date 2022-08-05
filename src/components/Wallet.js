import React from 'react'
import bit from '../assets/bitcoin.png'
import eth from '../assets/eth2.png'
import chart from '../assets/chart.png'
import p_1 from '../assets/c-3.png'
import{BsArrowLeftCircle} from 'react-icons/bs'
import { Link } from 'react-router-dom';



const Wallet = () => {
  return (
    <>
    <div className="mx-auto lg:w-11/12 mt-3 flex items-center gap-6 p-4 bg-w4">
      <p className=" text-3xl font-bold text-t-80 ">My wallet</p>
    <Link to='/home'> <BsArrowLeftCircle className='text-t-40' size={30}/></Link> 
      
    </div>
    

<div className="bg-w4   text-t-80 grid lg:grid-cols-2  mx-auto lg:w-11/12 gap-4" >
   {/* <p className='text-2xl text-t-40'>My Wallet</p> */}

  <div className='flex flex-col gap-9 mt-4 pl-3 pr-3'>
     
  <div className='  bg-w1 p-5 rounded-xl '>
    <div className='flex justify-between'>
     <p className='text-2xl font-bold ml-4'>BTC </p>
     <p className='text-lg mr-4'>56.3%</p>
    </div>
  
     {/* <p className='ml-4 font-bold text-xl'></p> */}
     <img src={chart} alt='chart' className='h-40 w-full'/>

    <div className='ml-4 mt-4 flex  gap-3'>
      <img src={bit} alt="bitcoin" className="h-8"/>
      <span className=' text-xl'>6.0286</span>
      {/* <p>Ethereum</p> */}
    
     </div>

   </div>


   <div className='  bg-w2 p-4  rounded-xl'>
    <div className='flex justify-between'>
     <p className='text-2xl font-bold ml-4'>BTC </p>
     <p className='text-lg mr-4'>56.3%</p>
    </div>
  
     {/* <p className='ml-4 font-bold text-xl'></p> */}
     <img src={chart} alt='chart' className='h-40 w-full'/>

    <div className='ml-4 mt-4 flex  gap-3'>
      <img src={bit} alt="bitcoin" className="h-8"/>
      <span className=' text-xl'>6.0286</span>
      {/* <p>Ethereum</p> */}
    
     </div>

   </div>


{/* 
   <div className='  bg-i3 p-4  '>
    <div className='flex justify-between'>
     <p className='text-2xl font-bold ml-4'>BTC </p>
     <p className='text-lg mr-4'>56.3%</p>
    </div>
  

     <img src={chart} alt='chart' className='h-40 w-full'/>

    <div className='ml-4 mt-4 flex  gap-3'>
      <img src={bit} alt="bitcoin" className="h-8"/>
      <span className=' text-xl'>6.0286</span>
    
    
     </div>

   </div> */}


   <div className='  bg-org p-4 rounded-xl '>
    <div className='flex justify-between'>
     <p className='text-2xl font-bold ml-4'>BTC </p>
     <p className='text-lg mr-4'>56.3%</p>
    </div>
  
     {/* <p className='ml-4 font-bold text-xl'></p> */}
     <img src={chart} alt='chart' className='h-40 w-full'/>

    <div className='ml-4 mt-4 flex  gap-3'>
      <img src={bit} alt="bitcoin" className="h-8"/>
      <span className=' text-xl'>6.0286</span>
      {/* <p>Ethereum</p> */}
    
     </div>

   </div>
 
  </div>

<div className='py-4 px-3 '>

<div className="rounded-xl text-t-80 flex  justify-between p-10 bg-i1">
  

<div className="flex flex-col items-start ">
 <div className='flex justify-center items-center gap-3'>
<img src={eth} alt='eth' className='h-10'/>
 <p className='text-semibold'>Bitcoin</p>
</div>

<div className='mt-3 flex flex-col'>
<h1 className='text-2xl font-bold'>Total Balance</h1>
<p className='text-xl font-medium'>1.8933722</p>
<p  className='text-xl font-medium'>573622.00$</p>
</div>
</div>

<div>
  <img src={p_1} alt='p_1' className='rounded-full h-40 border-2'/>
</div>

</div>

{/* transactions */}
<div className='text-t-80 flex flex-col gap-4 mt-7'>
  <h1 className='text-2xl font-bold'>Transactions</h1>
  
  <div className='rounded-lg p-6 bg-org'>
  <div className='flex justify-between text-lg'>
    <p>14:22, 12 dec 2018</p>
    <p>0.4782 BTC</p>
    </div>

    <div  className=''>
      <p className='text-center text-2xl '>2FG99oqBMBjzU5Oj9nyq1R</p>
    </div>

  </div>


  <div className='rounded-lg p-6 bg-org'>
  <div className='flex justify-between text-lg'>
    <p>14:22, 12 dec 2018</p>
    <p>0.4782 BTC</p>
    </div>

    <div  className=''>
      <p className='text-center text-2xl '>2FG99oqBMBjzU5Oj9nyq1R</p>
    </div>

  </div>


  <div className='rounded-lg p-6 bg-org'>
  <div className='flex justify-between text-lg'>
    <p>14:22, 12 dec 2018</p>
    <p>0.4782 BTC</p>
    </div>

    <div  className=''>
      <p className='text-center text-2xl '>2FG99oqBMBjzU5Oj9nyq1R</p>
    </div>

  </div>


  <div className='rounded-lg p-6 bg-org'>
  <div className='flex justify-between text-lg'>
    <p>14:22, 12 dec 2018</p>
    <p>0.4782 BTC</p>
    </div>

    <div  className=''>
      <p className='text-center text-2xl '>2FG99oqBMBjzU5Oj9nyq1R</p>
    </div>

  </div>


  <div className='rounded-lg p-6 bg-org '>
  <div className='flex justify-between text-lg'>
    <p>14:22, 12 dec 2018</p>
    <p>0.4782 BTC</p>
    </div>

    <div  className=''>
      <p className='text-center text-2xl '>2FG99oqBMBjzU5Oj9nyq1R</p>
    </div>

  </div>




  </div>

  


</div>


</div>

</>
  )

}

export default Wallet