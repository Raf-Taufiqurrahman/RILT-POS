import React from 'react'
import { HiExclamationCircle } from "react-icons/hi";
export default function Textarea({errors, children, ...props}) {
    return (
        <div className='relative'>
            <textarea className='py-2 px-4 block w-full rounded-lg text-sm focus:z-10 focus:outline-none focus:ring-1 focus:ring-sky-500 text-gray-700 border' rows={4} {...props}>
                {children}
            </textarea>
            {errors &&
            <div className='absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 pr-4'>
                <HiExclamationCircle size={'18'} className='fill-rose-500 text-gray-50'/>
            </div>}
        </div>
    )
}
