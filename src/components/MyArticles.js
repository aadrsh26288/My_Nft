import React,{useState, useEffect}from 'react'
import article_bg from '../assets/article_bg.png'
import { Link, useParams } from 'react-router-dom';
import {articles} from '../assets/data'
import{BsArrowLeftCircle} from 'react-icons/bs'
import Footer from '../components/Footer'


const MyArticles = () => {
 

  return (
  
    <div className="contrast-125">
      <div className="mt-5 text-t-20  flex items-center gap-4 pl-4">
     <Link to='/home'>  <BsArrowLeftCircle size={35} /></Link> 
        <p className="text-4xl text-t-20 text-center font-signature first-letter:text-red ">Articles</p>
      </div>

        {
            articles.map((a)=>{
                const {id, title,body,img,date,def,author} = a;
                return (


              <div className="md:p-7 mx-auto text-t-20 p-3 contrast-200 " key={id} >
                      <div className="">
                      <div>
                    <img src={img} alt="bg" className=' w-full h-52 md:h-auto'/>
                    </div>
                    <p className="text-2xl font-bold mt-3">{title}</p>
                    <div className='mt-3'>
                    <p className='text-xl font-bold mt-3 text-justify '>{def}</p>
                     <p className='text-xl text-justify mt-1 first-letter:text-7xl first-letter:font-extrabold first-letter:text-red'>{body}</p> 
                    <div className='flex justify-between items-center'>
                      <p className='mt-4'>{date}</p>
                      <p className='pr-3'>By- {author}</p>
                    </div>
 
                    </div>
                    </div>
            
               
                 </div>
        
                )
            })
        }
        <Footer/>
    </div>
  )
}



    


export default MyArticles