'use client'
import React from 'react'
import Image from 'next/image'
function Img({
    src
}: {src: string}) {
  return (
    <div className='w-full h-full'>
        <Image className='w-full h-full' width={300} height={300} alt="img" src={"/" +src} />
    </div>
  )
}

export default Img