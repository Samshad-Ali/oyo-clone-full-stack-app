import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center h-screen w-full'>
        <p className='font-bold text-red-500 bg-white p-1 px-3 rounded-md text-lg'>Page not found 404</p>
        <Link className='hover:underline text-green-500' href={'/'}>Go to homepage</Link>

    </div>
  )
}

export default page