import { IconExclamationCircle } from '@tabler/icons-react'
import React from 'react'

export default function TextInput({type, icon, placeholder, errors, ...props}) {
    return (
        <div className='relative'>
            <input type={type} className='py-2 px-4 pl-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-700' placeholder={placeholder} {...props}/>
            <div className='absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4'>
                {icon}
            </div>
            {errors &&
            <div className='absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 pr-4'>
                <IconExclamationCircle size={'20'} strokeWidth={'1.2'} className='fill-rose-500 text-gray-50'/>
            </div>}
        </div>
    )
}
