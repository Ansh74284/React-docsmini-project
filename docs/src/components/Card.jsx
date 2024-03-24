import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({data,reference}) => {
  return (
    
       <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={0.2} dragTransition={{bounceStiffness: 100, bounceDamping:50}} className='relative flex-shrink-0 w-60 h-72 rounded-[35px] bg-stone-400/60 p-3 overflow-hidden'>
       <FaRegFileAlt />
       <p className='mt-5 font-semibold leading-tight'>{data.desc}</p>
       <div className='footer absolute bottom-0  w-full  left-0'>
        <div className='flex items-center justify-between px-8 py-3 mb-2'>
            <h5>{data.filesize}</h5>
            <span className='w-8 h-8 bg-zinc-600 rounded-full flex items-center justify-center '>
              {data.close ? <IoClose/> : <LuDownload size="0.7em" color="#fff" />}
            
            </span>
        </div>
        {
          data.tag.isOpen ? (
            <div className={`tag w-full py-6 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex justify-center items-center`}>
              <h3 className='text-md font-semibold'>{data.tag.tagTitle}</h3>
            </div>
          ) : null
        } 
        
       </div>
       
       </motion.div>
  );
}

export default Card
