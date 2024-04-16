import React from 'react'

const Phoneblock = ({title,para,icon}) => {
  return (
    <div className="gap-2 my-2 flex flex-col justify-center items-center px-2 lg:px-3">
    <span>{icon}</span>
       <div className='flex items-center justify-center flex-col'>
         <h3 className="lg:text-base text-xs font-bold">{title}</h3>
         <p className=" text-gray-500 text-xs line-clamp-1">
           {para}
         </p>
       </div>
     </div>
  )
}

export default Phoneblock