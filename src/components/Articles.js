import React from 'react'
import article_1 from '../assets/article-1.png'
import article_2 from '../assets/article-2.png'
import article_3 from '../assets/article-3.png'
import{Link} from 'react-router-dom'
import company from '../assets/company.png'

const Article = () => {
  return (
    <div className="mt-10 flex flex-col items-center">
      <h1 className="text-4xl text-white font-bold text-t-80 text-center font-signature">Articles</h1>
        <div className="mx-auto w-11/12 text-t-10 flex md:flex-row flex-col items-center md:gap-10 gap-3 justify-center mt-8">
        <Link to={`/A/${2}`} >  <div className='md:w-72 border-2 border-t-90 rounded-lg md:hover:scale-125 duration-500  'key={1}>
                <img src={article_1} alt="Arcticle" className='md:w-72' />
                <div className='p-3'>
                <p className='mt-1'>We've lowered marketplace fees on all your favorite NFTs</p>
                <p className='mt-3'>January 23, 2022</p>
                </div>
            </div>
          </Link>  

            <Link to={`/A/${3}`} >   <div className='md:w-72  border-2 border-t-90  rounded-lg md:hover:scale-125 duration-500' key={2}>
                <img src={article_2} alt="Arcticle" className='md:w-72'/>
                <div className='p-3'>
                <p className='mt-1'>Your Ultimate Guide to Getting Started With NFTs on Rarible</p>
                <p className='mt-3'>April 03, 2022</p>
                </div>
            </div>
           </Link >


        <Link to={`/A/${4}`} >  <div className='md:w-72 border-2  border-t-90 rounded-lg md:hover:scale-125 duration-500'key={3}>
                <img src={article_3} alt="Arcticle" className='md:w-72'/>
                <div className='p-3'>
                <p className='mt-1'>Why Community Marketplaces are the future of NFT trading</p>
                <p className='mt-3'>July 7, 2022</p>
                </div>
            </div>

          </Link> 
        </div>  
   <Link to='/myarticles'><button className='text-center text-t-10 border-2 border-t-90 cursor-pointer p-3 w-40 lg:mt-10 mt-5 rounded-2xl'>See More</button></Link>   

   <div className='mt-10'>
      <img src={company} alt='company' className='px-12'/>
  </div> 

    </div>

  )
}

export default Article




