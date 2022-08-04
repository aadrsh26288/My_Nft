import React,{useState} from 'react'
import logo from '../assets/mark.png'
import Userlogo from '../assets/Ellipse 5.png'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [nav, setNav] = useState(false);


const nav1=  
[
    {
       id:1,
       name: 'Create',
       to:'/create',
    },
    {
        id:2,
        name: 'Explore',
      
     },
     {
        id:3,
        name: 'Wallet',
        to:'/wallet',
     },
     {
      id:4,
      name: 'Community',
      to:'/community'
   },
]


  return (
    <div className='flex bg-black text-t-10 items-center justify-between p-5 w-full z-50' >
        <div className='flex gap-1'>
            <img src={logo} alt={logo}/>
        <Link to='/'>  <h3 className='text-2xl font-semibold font-testimonial '>Mynft</h3></Link>  
        </div>
        <div className='hidden md:flex'>
            <input type='text' placeholder='Search items and collections'  className='w-96 p-1 bg-t-30 rounded-lg pl-3'/>
        </div>

       <ul className=' hidden md:flex cursor-pointer  '>
    {nav1.map((n)=>{
        const{id,name,to}=n;
        return(
   <Link to={to}> <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 mr-2'>{name}</li></Link>    
        )
    })}
    <img src={Userlogo} alt={Userlogo}/>
       </ul>

       <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-custom to-t-50 text-gray-500">
          {nav1.map(({ id, name ,to}) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
          <Link to ={to}> <button
                onClick={() => setNav(!nav)}
               
              >
                {name}
              </button></Link>  
            </li>
          ))}
        </ul>
      )}

   {/* <Link to="/create">Create</Link> */}


    </div>
  )
}

export default Navbar