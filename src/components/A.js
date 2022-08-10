import React,{useState, useEffect}from 'react'

import { Link, useParams } from 'react-router-dom';
import {articles} from '../assets/data'

function A(){
    const [image, setimage] = useState('');
    const[Name, setName]= useState('');
    const [body, setBody] = useState('');
    const [date, setDate] = useState('');
    const { id } = useParams();
    useEffect(()=>{
        const newArticle =articles.find(Article=>Article.id===parseInt(id))
        setimage(newArticle.img);
        setName(newArticle.title);
        setBody(newArticle.body);
        setDate(newArticle.date);
    })
    return(
       
        <div className="text-t-10 mx-auto p-6 ">
      
      <div className=''>
         
         <div>
            <img src={image} alt='alt ' className='h-56 md:h-auto' />
         </div>

         <div className='mt-4'>
          <p className='text-2xl font-bold'>{Name}</p>
          <p className='text-xl'>{body}</p>
          <p>{date}</p>
         </div>
      
      </div>

        </div>

    )
    }
export default A;