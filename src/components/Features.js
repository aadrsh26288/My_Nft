import React,{ useState} from 'react'
import about_1 from '../assets/f-1.png'
import about_2 from '../assets/f-2.png'
import about_3 from '../assets/f-3.png'
import about_4 from '../assets/f-5.png'
import {RiCreativeCommonsZeroLine,RiMoneyDollarCircleLine} from 'react-icons/ri'
const Features = () => {

  const[claim,setclaim] =useState(false)
  return (
<>
<div className="bg-black">
    <div className=" mt-10 grid lg:grid-cols-2 gap-7 justify-between mx-auto w-11/12 border-2">
      <div className=' flex items-center justify-between rounded-lg p-5 bg-secondary'>
            <div  className='flex flex-col gap-3 pl-3'> 
              <div className='' >
              <RiCreativeCommonsZeroLine size={30} className='text-t-70'/>
              <h3 className='text-t-70 text-3xl font-semibold font-style_3'>Claim Limited NFT</h3>
              </div>

              <div>
                <p className='text-t-40 text-1xl w-3/4'>New members who sign up between 3/5 and 3/11 can claim a free NFT by creator Cyle Sim.</p>
              </div>

              <div>
                <button className='py-2 px-5 text-center rounded-lg bg-org text-t-10'onClick={()=>{setclaim(!claim)}}>{claim?'claimed':'claim'}</button>
              </div>

            </div>

            <div>
              <img src={about_1} alt={about_1}/>
            </div>

        </div>

        <div className=' flex items-center justify-between   rounded-lg p-5 bg-org'>
            <div className='flex flex-col gap-3 pl-3'> 
              <div className=''>
              <RiMoneyDollarCircleLine size={30} className='text-lite'/>
              <h3 className='text-3xl font-style_3 font-semibold w-full text-lite'>Finance with 0% APR</h3>
              </div>

              <div>
                <p className='text-t-40 text-1xl w-3/4'>We have partnered with Zlamra to allow you to finance your NFT investments with zero fees.</p>
              </div>

              <div>
                <button className='py-2 px-5 text-center rounded-lg bg-t-30 text-t-10'>Claim</button>
              </div>

            </div>

            <div>
              <img src={about_2} alt={about_1}/>
            </div>
        </div>

    </div>
</div>



<div className="bg-black mt-14 contrast-125">
    <div className="mx-auto w-11/12 pt-6">
          <p className='text-t-80 text-3xl font-semibold font-signature'>Upcoming Drops</p>
          <p className='text-t-40 '>Be the first to get your hands on limited NFT drops, exclusive to NFTwow.</p>
        </div>
    <div className=" mt-1 grid lg:grid-cols-2 gap-7 justify-between   mx-auto w-11/12">
      <div className=' flex items-center justify-between rounded-lg bg-fourth p-5 '>
            <div  className='flex flex-col gap-3 pl-3'> 
              <div className='' >
           
              <h3 className='text-t-120 text-3xl font-semibold font-style_3'>Char-Blobs</h3>
              </div>

              <div>
                <p className='text-t-40 text-1xl w-3/4'>This new collection by Muxhy recreates some of his most famous characters in 3D.</p>
              </div>

              <div>
                <button className='py-2 px-5 text-center rounded-lg  text-t-40 border-custom hover:border-t-40 border-b-4'>00:01:09:34</button>
              </div>

            </div>

            <div>
              <img src={about_3} alt={about_1}/>
            </div>

        </div>

        <div className=' flex items-center justify-between  bg-fifth rounded-lg p-5'>
            <div className='flex flex-col gap-3 pl-3 '> 
              <div className=''>

              <h3 className='text-t-130 text-3xl font-semibold font-style_3'>Jeanie Tyu</h3>
              </div>

              <div>
                <p className='text-t-40 text-1xl w-3/4'>Artist Jeanie Tyu’s new exhibition in Tokyo consists of ten artworks which will be available for sale on NFTwow.</p>
              </div>

              <div>
                <button className='py-2 px-5   text-center rounded-lg text-t-20 border-b-4 border-custom hover:border-t-40 '>02:03:32:17</button>
              </div>

            </div>

            <div>
              <img src={about_4} alt={about_1}/>
            </div>
        </div>

       
        
    </div>
</div>
</>
  )
    
    
        

}

export default Features