import React from 'react'
import { HiExclamationCircle } from "react-icons/hi";
export default function Input({type, placeholder, errors, ...props}) {
    return (
        <div className='relative'>
            <input type={type} className='py-2 px-4 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-sky-500 text-gray-700' placeholder={placeholder} {...props}/>
            {errors &&
            <div className='absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 pr-4'>
                <HiExclamationCircle size={'18'} className='fill-rose-500 text-gray-50'/>
            </div>}
        </div>
    )
}
