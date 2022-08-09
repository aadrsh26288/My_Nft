import React from 'react'
import{BsWallet2} from 'react-icons/bs'
import{BsFileEarmarkArrowUp} from 'react-icons/bs'
import{BsBookmarkDash} from 'react-icons/bs'


const About = () => {
  return (
    <div className={"w-11/12  bg-org py-6 mx-auto border-4 mt-20 rounded-xl"} >
<h1 className='text-4xl text-t-10 font-bold text-center'>Create and Sell Your NFTs</h1>

<div className='flex lg:flex-row flex-col px-4 mt-8 lg:gap-0 gap-6 '>
    <div className='flex items-center justify-center flex-col'>
        <BsWallet2 className='text-t-40' size={40}/>
        <p className='text-2xl text-t-40 font-bold mt-2'>Set up of Your wallet</p>
        <div className='px-5  '>
        <p className='text-xl text-t-40 text-center mt-2'>Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support.</p>
        </div>
    </div>

    <div  className='flex items-center justify-between flex-col'>
        <BsFileEarmarkArrowUp className='text-t-40' size={40}/>
        <p className='text-2xl text-t-40 font-bold mt-2'>Set up of Your wallet</p>
        <div className='  border-t-40  '>
        <p className='text-xl text-t-40 mt-2 text-center'>Upload your work then Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.</p>
        </div>
    </div>

    <div  className='flex items-center justify-center flex-col'>
        <BsBookmarkDash className='text-t-40' size={40}/>
        <p className='text-2xl text-t-40 font-bold mt-2'>Set up of Your wallet</p>
        <div className='px-5  '>
        <p className='text-xl text-t-40 text-center mt-2'>Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them and provide you with zero fees</p>
        </div>
       
    </div>
</div>
    </div>
  )
}

export default About