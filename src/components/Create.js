import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {collections} from '../assets/data'
import header_bg from '../assets/header-background.png'
const Create = () => {

  const [image, setimage] = useState('');
  const[Name, setName]= useState('');
  const[price, setPrice] = useState('');
  const[description, setDescription] = useState('');
  const[like, setLike]=useState('');
  const[bid,setBid] = useState('');
  const[creator, setCreator]= useState('');

  const { id } = useParams();

  useEffect(() => {
    const newPerson = collections.find((person) => person.id === parseInt(id));
    setimage(newPerson.img);
    setName(newPerson.name)
    setPrice(newPerson.price)
    setDescription(newPerson.description)
    setLike(newPerson.like)
    setBid(newPerson.bid)
    setCreator(newPerson.creator)

  }, []);

  let placebid=()=>{
    setBid(bid+1)


  }


  const url ='https://images.unsplash.com/photo-1639468611744-b5b48641e82f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5mdHxlbnwwfDB8MHxibGFja3w%3D&auto=format&fit=crop&w=600&q=60'

  return (
    // <div className="w-11/12 mx-auto bg-t-70 mt-10 lg:mt-0 z-0">

    //   <div className=" h-screen w-full relative border-2 border-t-10">
    //       <img src={header_bg} alt={header_bg} className="h-52 w-full" />
    
    
      
    //  </div>
    // </div>



<div className="mt-5">
<div className="text-t-80 grid lg:grid-cols-2 lg:gap-0 gap-4    ">
      <div className="">
        <img src={image} alt={image} className=" w-full"/>
     {/* <h1 className="text-2xl text-t-80 ">{Name}</h1> */}
      </div>

    <div className="text-t-80 w-full lg:hover:border-l-4 lg:hover:border-t-70  duration-100">
      <div className="bg-org lg:py-8  lg:px-14 py-4 px-7">

      <div className="flex justify-between items-center">
      <h1 className="text-2xl lg:text-4xl text-t-80 font-bold capitalize pl-2">{Name}</h1>
      <div className="flex">
       <button className='bg-t-90 text-center p-3 rounded-md w-20 mx-1 ml-2'>Share</button>
      <button className='bg-purple text-center p-3 rounded-md w-24 lg:w-32 mx-2' onClick={placebid}>Place-bid</button>
      </div>
     
       </div>

       <div>
        <h1 className="text-2xl text-t-80 mt-4 pl-3" >Created By - {creator} </h1>
       </div>

       < div className="mt-5">
        <hr className='w-11/12 mx-auto '></hr>
        <hr className='w-11/12 mx-auto h-1'></hr>
       </div>

       <div className='py-5 px-3'>
        <p className='text-justify'>{description}.</p>
       </div>

      </div>

      <div className='grid sm:grid-cols-4 grid-cols-2 gap-6 py-3 mt-3 lg:p-8 justify-items-center bg-t-30 '>
        <div className='border-2 h-32 w-32 flex flex-col justify-center items-center rounded-xl bg-purple border-org'>
          <p className='font-semibold text-xl'>{bid}</p>
          <p className='font-semibold text-xl'>Bidders</p>
        </div>
        <div className='border-2 h-32 w-32 flex flex-col justify-center items-center rounded-xl bg-w1  border-org'>
          <p className='font-semibold text-xl'>1</p>
          <p  className='font-semibold text-xl text-center'>Owners</p>
        </div> 
        <div className='border-2 h-32 w-32 flex flex-col justify-center items-center rounded-xl bg-w2  border-org'>
          <p  className='font-semibold text-xl'>{price}</p>
          <p className='font-semibold text-xl'>Price</p>
        </div> 
        <div className='border-2 h-32 w-32 flex flex-col justify-center items-center rounded-xl bg-w3 border-org'>
          <p  className='font-semibold text-xl'>{like}</p>
          <p  className='font-semibold text-xl'>Likes</p>
        </div>

      </div>
     </div>


    </div> 
</div>

  )
}

export default Create