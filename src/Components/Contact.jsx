import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
function Contact() {
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit =async(data) =>{
    const userInfo=
    {
      name:data.name,
      email:data.email,
      message:data.message
  }
  try {
   await axios.post("https://getform.io/f/bmddopqa" , userInfo );
   toast.success("your message has been sent");
  } catch (error) {
    console.log("error");
    toast.error("something went wrong")
  }

  }
  return (
    <>
      <hr />
      <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
        <spam>
          plese fill out the form below to contact me
        </spam>
        <div className='flex flex-col items-center justify-center mt-5'>
          <form onSubmit={handleSubmit(onSubmit)}
               method='POST'
            action="https://getform.io/f/bmddopqa"
        className='bg-slate-200 w-96 px-8 py-6 rounded-lg'>
            <h1 className='text-xl font-semibold mb-4'>Send  your message</h1>
            <div>
              <label className='block mb-2 text-gray-700'> FullName:</label>
              <input  {...register("name", { required: true })} type="text" className=' shadow appearance-none block w-full p-2 mb-4 border rounded text-gray-700 leading-tight focus:outline' placeholder='Enter your Name'
                name='name'
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div>
              <label className='block mb-2 text-gray-700'> Email adress:</label>
              <input {...register("email", { required: true })} type="email" className=' shadow appearance-none block w-full p-2 mb-4 border rounded text-gray-700 leading-tight focus:outline' placeholder='Enter your Email'
                name='email'

              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div>
              <label className='block mb-2 text-gray-700'> Message:</label>
              <textarea  {...register("message", { required: true })} type="text" className=' shadow appearance-none block w-full p-2 mb-4 border rounded text-gray-700 leading-tight focus:outline'
                name='message'

              />
              {errors.message && <span>This field is required</span>}
            </div>

            <button type="submit" className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-200 duration-150'>Send</button>
          </form>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Contact
