import React, { useRef } from 'react'
import Card from './Card'


const ForeGround = () => {

  const ref = useRef(null);
  const data = [
    {desc:"It has come to my attention that many in the office have been spending time on the Google home page microgames.", filesize:"0.9mb", close:true, tag:{isOpen:true, tagTitle: "Download Now", tagColor: "green"},
   },
   {desc:"My formula for living is quite simple. I get up in the morning and I go to bed at night. In between, I occupy myself as best I can.", filesize:"0.5mb", close:false, tag:{isOpen:true, tagTitle: "Download Now", tagColor: "blue"},
   },
   {desc:"In three words I can sum up everything I’ve learned about life: it goes on.", filesize:"0.2mb", close:true, tag:{isOpen:false, tagTitle: "Upload Here", tagColor: "green"},
   },
  ]
  return (
    <div>
      <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-3'>
       {data.map((item, index)=>(
        <Card data={item} reference={ref}/>
       ))}
      </div> 
    </div>
  )
}

export default ForeGround
