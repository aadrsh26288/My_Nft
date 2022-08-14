import React from 'react'
import Form from '../assets/form.png'
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'
import Footer from '../components/Footer'
const Contact = () => {
  return (
    <div className="text-t-20 mt-6">
        <h1 className="font-bold font-signature text-4xl text-center mt-8 pb-5">Lets get in Touch</h1>
        <div className="w-11/12 mx-auto grid md:grid-cols-2 pb-4">
            <img src={Form} alt="form_bg" className=''  />

            <div className=" ">
               <div className='mt-3 px-4'>
                <h1 className='font-bold text-4xl'>Have Any Question? Contact us</h1>
                <p className='text-lg'>Already have accounts? <span  className='text-red cursor-pointer'>Login</span></p>
               </div>

               <div className="flex gap-3 px-4 mt-5">
                <button className='flex gap-2 bg-t-90 p-2 rounded-2xl'><img src={google} alt='google' className='h-7'/>Login With Google</button>
                <button className='flex gap-2 bg-t-90 p-2 rounded-2xl'><img src={facebook} alt='google' className='h-7'/>Login With Facebook</button>
               </div>

               <div className='flex mt-5 items-center gap-1 justify-center'>
                <p className='w-64 h-1  bg-red'></p>Or<p className='w-64 h-1  bg-red'></p>
               </div>
              
              <div>
                <form>
                    <div className='flex w-full  flex-col px-5 mt-3' >
                          <label className='ml-1' >Email</label>
                          <input type="email" placeholder="Email" className='py-2 outline-none rounded-lg bg-t-30 px-3' autocomplete="off"/>
                    </div>

                    <div className='flex w-full  flex-col px-5 mt-3'>
                          <label className='ml-1'>Password</label>
                          <input type="Password"  placeholder="Password" className='py-2 outline-none rounded-lg bg-t-30 px-3'autocomplete="off"/>
                    </div>

                    <div className='w-full  flex flex-col px-5 mt-3'>
                          <label className='ml-1'>Message</label>
                          <textarea className='h-64 py-2 outline-none rounded-lg bg-t-30 px-3 ' placeholder='Message...'></textarea>
                    </div>

                    <div className='flex px-5 mt-3 gap-2'>
                   <input type='checkbox' className=''/>
                   <p className='text-lg'>I agree to the terms & service and privacy policy</p>
                    </div>

                    <div className='px-5 mt-5 mx-auto rounded-xl pb-4' >
                        <button className='bg-w4 p-4 w-full  rounded-xl'>Send Us</button>
                    </div>

                  
                </form>
              </div>
               

            </div>
            
        </div>
        <Footer/>
    </div>
  )
}

export default Contact