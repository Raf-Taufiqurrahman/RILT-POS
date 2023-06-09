import React from 'react'

export default function Select({children, ...props}) {
    return (
        <select className='py-2 px-4 block w-full rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-sky-500 text-gray-700 border'{...props}>
            {children}
        </select>
    )
}
