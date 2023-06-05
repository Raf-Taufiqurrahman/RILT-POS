import React from 'react'

export default function Card({title, icon, children}) {
    return (
        <div className='w-full bg-white rounded-lg border'>
            <div className='flex gap-2 items-center py-2 px-4 bg-gray-100 rounded-t-lg'>
                {icon}
                <h1 className='text-gray-700 font-bold uppercase text-sm'>{title}</h1>
            </div>
            <div className='py-2 px-4'>
                {children}
            </div>
        </div>
    )
}
