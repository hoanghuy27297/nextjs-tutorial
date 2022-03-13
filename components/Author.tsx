import React from 'react'
import Image from 'next/image'

const Author = ({ author }) => {
  return (
    <div className="bg-opacity-30 relative mt-20 mb-8 rounded-lg bg-black p-12 text-center">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          src={author.photo.url}
          unoptimized
          alt={author.name}
          width="100px"
          height="100px"
          className="h-24 w-24 rounded-full object-cover align-middle"
        />
      </div>
      <h3 className="my-4 text-xl font-bold text-white">{author.name}</h3>
      <p className="text-lg text-white">{author.bio}</p>
    </div>
  )
}

export default Author
