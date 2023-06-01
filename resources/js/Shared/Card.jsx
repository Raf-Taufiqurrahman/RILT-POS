import React from 'react'

export default function Card({title, icon, className, children}) {
    return (
        <div className={`w-full bg-white rounded-lg shadow-sm`}>
            <div className='flex gap-2 items-center p-4 bg-gray-100 rounded-t-lg'>
                {icon}
                <h1 className='text-gray-700 font-bold uppercase text-xl'>{title}</h1>
            </div>
            <div className='p-4'>
                {children}
            </div>
        </div>
    )
}
