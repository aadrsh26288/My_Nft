import React from 'react'
import exp_1 from '../assets/exp-1.png'
import c1 from '../assets/c-1.png'
import{SiBitcoinsv} from 'react-icons/si'
import { explore } from '../assets/data'
import{BsArrowLeftCircle} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import '../'

const Explore = () => {
  return (
    <div className='text-t-80'>
      <div className='flex justify-start items-center ml-12 p-3 h'>
           <Link to='/home'>  <BsArrowLeftCircle  size={35} /></Link> 
      <h1 className="text-4xl text-center font-signature font-bold first-letter:text-red text-t-80 p-2">Explore</h1>
      </div>
  
        <div className='text-t-80 w-11/12 mx-auto mt-4 contrast-125'>
          {
            explore.map((e)=>{
              const{id,title,img,price,artist,name}=e;
              return (
                <div key={id} className='mt-3 pb-2 border-b-2 border-t-70'>
                <div className=' grid md:grid-cols-2  rounded-xl '>
                <div>
                      <img src={img} alt={exp_1} className=''/>
                </div>
                  
                    <div className='px-3'>
                        <p className='text-2xl font-bold mt-2 first-letter:text-red'>{title}</p>
                        <p className='text-lg text-justify mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                          optio, eaque rerum! Provident similique accusantium nemo autem.</p>
    
                          <div>
                            <div className="mt-2 flex justify-between  items-center ">
                                <div className="flex flex-col justify-center  ">
                                <img src={artist} alt="c1" className='h-24 rounded-full border-2 border-w1 '/>
                                <p className='text-lg '>{name}</p> 
                                </div>
                                {/* <div className='text-2xl font-bold'>13:02:22 Remaining</div> */}
                                <div className='flex flex-col items-center'>
                                < SiBitcoinsv size={70} className=' text-w1'/>
                                <p className='text-2xl  text-center'>{price} <span className='font-medium'>Bitcoin</span></p>
                         
                                </div>
                             
                            </div>
    
                            <div className='flex mt-3  pb-1 gap-3'>
                                {/* <p className='text-2xl font-bold text-center'>40 <span className=''>Bitcoin</span></p> */}
                                <button className="p-3 rounded-lg bg-t-30  w-full text-2xl font-semibold text-t-40 hover:bg-w1 duration-150 ">Bid Now</button>
                            </div>
    
                          </div>
    
                    </div>
               </div>
               <div>
    
               </div>
               </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Explore