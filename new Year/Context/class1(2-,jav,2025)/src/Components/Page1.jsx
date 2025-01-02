import React from 'react'

const Page1 = ({data}) => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
<div className=''>
{data.map((e,inx)=>{
        return <h1 className='text-4xl font-extrabold font-serif'>{e.name} </h1>

    })}
</div>
    </div>
  )
}

export default Page1