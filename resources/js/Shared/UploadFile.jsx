import React from 'react'
export default function UploadFile({...props}) {
    return (
        <input type='file' className='py-2 px-4 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-700'{...props}/>
    )
}
