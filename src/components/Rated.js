import React,{useState} from 'react'
import menu from '../assets/data'
import a_1 from '../assets/a-1.png'
const Rated = () => {
  const [item,setitem] = useState(menu)


  const Filter = (catitem)=>{
    const newItems =menu.filter((curELm)=>{
        return curELm.Category===catitem
    })
    setitem(newItems)
}

  return (
    <div className="mt-20 text-t-80 contrast-125">
        <div className="mx-auto w-11/12 bg-org p-5 rounded-lg ">
           
           <div>
            <h2 className="text-2xl font-semibold text-white font-signature">Get your own Nft Now!!!</h2>
           </div>

           <div className='lg:flex items-center lg:justify-around mt-4 gap-5 flex text-gray-500'>
            <button onClick={() =>setitem(menu)} className="lg:py-4  hover:shadow-md  hover:shadow-t-60 lg:px-9 text-center px-3 py-2 lg:w-32 w-14  border-b-2 hover:border-none  border-gray-500 rounded-lg">All</button>
            <button onClick={()=>{Filter('Top')}}  className="lg:py-4  hover:shadow-md  hover:shadow-t-110 lg:px-9 text-center px-3 py-2 lg:w-32 border-b-2 hover:border-none  border-gray-500 rounded-lg">Top</button>
            <button onClick={()=>{Filter('New')}} className="lg:py-4  hover:shadow-md  hover:shadow-purple lg:px-9 text-center px-3 py-2 lg:w-32 border-b-2 hover:border-none  border-gray-500 rounded-lg">New</button>
            <button onClick={()=>{Filter('Trending')}}className="lg:py-4  hover:shadow-md   hover:shadow-gold lg:px-9 text-center px-3 py-2  lg:w-32 border-b-2 hover:border-none border-gray-500 rounded-lg">Trending</button>
           </div> 


           <div className=' grid lg:grid-cols-4 gap-2  grid-cols-2'  >
           {
            item.map((m)=>{
              const{id,img,color}=m;

              return(
                <div className="mt-5 " key={id}>
                <div className="cursor-pointer">
                  <div className="">
                    {/* <img src={img} alt={img} className=""/> */}
                    {/* <img src={img} alt={img} className={`lg:h-52 h-46 shadow-lg hover:scale-110 duration-500 hover:${color} lg:ml-4 rounded-lg`}/> */}
                    <img src={img} alt={img} className='lg:h-52 h-46  hover:shadow-lg hover:shadow-purple hover:scale-110 duration-500  lg:ml-4 rounded-lg'/>


                    </div>
                </div>
            </div>
    
              )
            })
           }
              </div>
           
      
        </div>

       
    </div>
  )
}

export default Rated



