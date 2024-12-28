import React from 'react'
// import pic from '../../public/gopaldp.jpg';
import MongoDb from '../../public/mongodb.jpg';
import Express from "../../public/express.png";
import Reactjs from "../../public/reactjs.png";
import Node from "../../public/node.png";
import Javascript from "../../public/javascript.png";
import Html from "../../public/html.png";
import Css from "../../public/css.jpg";
function Portfolio() {
    const cardItem=[

        {id:1,
            logo:MongoDb,
            name:"mongoDB"
        },
        {id:2,
            logo:Express,
            name:"Express"
        },
        {id:3,
            logo:Reactjs,
            name:"reactjs"
        },
        {id:4,
            logo:Node,
            name:"Nodejs"
        },
        {id:5,
            logo:Javascript,
            name:"Javascript"
        },
        {id:6,
            logo:Html,
            name:"Html"
        },
        {id:7,
            logo:Css,
            name:"Css"
        },
    ]
  return (
    <div name="Portfolio"  className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      <h1 className='text-3xl font-bold mb-5'> PortFolio</h1>
      <span className='underline font-semibold'>Featured projects</span>
      
<div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5 '>
    {
        cardItem.map(({id, logo , name})=>(
            <div className='md:w-[300px] md:h-[300px] border-2[px] rounded-lg shadow-lg cursor-pointer hover:scale-110 duration-300' key={id}>
                <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt="" />
                <div>
                    <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                    <p className='px-2 text-gray-500'>lorem ipsum ,dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div className='justify-around py-4 px-6 space-x-4'>
                        <button className='bg-blue-500 hover:bg-blue-500 text-white rounded px-4 py-2  font-bold'>Video</button>
                        <button className='bg-green-500 hover:bg-green-500 text-white rounded  px-4 py-2 font-bold'>source code</button>
                    </div>
                    </div>
        ))
    }
    
</div>
    </div>
  )
}

export default Portfolio
