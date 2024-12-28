import React from 'react'
import pic from '../../public/gopaldp.jpg';
import { CiFacebook } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaYoutubeSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { ReactTyped } from "react-typed";




function Home() {
  return (
    <>
<div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
    <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 mt-12 md:text-2xl space-y-2 order-2 md:order-1'>
        <spam>Welcome In My Feed</spam>
       <div className='flex space-x-1 text-2xl md:text-4xl'>
       <h1>Hello, I'm a</h1>
       <ReactTyped className='text-red-700'
        
          strings={["Devloper","Programer","coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
       </div>
       <br />
        <p className='text-sm md:text-md text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, recusandae consequatur. Accusamus sint libero eligendi laborum fuga repudiandae? Asperiores tempore eos animi dolores corrupti! Sint quos, mollitia architecto aliquam nesciunt, optio cum delectus sit voluptatum aut ratione quaerat veniam aperiam!</p>
        <br />
        {/* social media */}
 <div className='flex flex-col items-center md:flex-row  justify-between space-y-6 md:space-y-0'>
 <div  className='space-y-2'>
            <h1 className='font-bold'>Available on</h1>

            <ul className='flex space-x-2 '>

                <li>
                    <a href="https://www.instagram.com/" target='_blanck'>
                    <FaInstagramSquare className='text-2xl cursor-pointer  hover:scale-110 duration'/>
                    </a>
                    </li>
                <li>
                <a href="https://www.facebook.com/" target='_blanck'>
                < CiFacebook className='text-2xl cursor-pointer  hover:scale-110 duration'/>
                </a>
                </li>
                <li>
                <a href="https://www.linkedin.com/" target='_blanck'>
                <CiLinkedin className='text-2xl cursor-pointer  hover:scale-110 duration'/>
                </a>
                </li>
                <li>
                <a href="https://www.youtube.com/" target='_blanck'>
                    <FaYoutubeSquare className='text-2xl cursor-pointer   hover:scale-110 duration '/>
                    </a>
                    </li>
            </ul>
        </div>
        <div className='flex'>
        <div className='space-y-3'>
        <h1 className='font-bold'>currently working on</h1>

<div className=' flex  items-center justify-between space-y-6 md:space-y-0'>
<SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
<SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
<SiReact  className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
<IoLogoNodejs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />


</div>
 </div>
        </div>
        </div>
 
        </div>
        <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
        <img src={pic} className=' rounded-full md:w-[450px] md:h-[450px] ' alt="" />
        </div>
    </div>
</div>
<hr />

</>
  )
}

export default Home
