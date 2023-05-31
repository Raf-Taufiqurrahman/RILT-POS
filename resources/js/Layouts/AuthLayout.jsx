import React from 'react'

export default function AuthLayout({children}) {
    return (
        <div className='h-screen flex flex-col justify-center items-center px-4 lg:px-0'>
            <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white rounded-lg shadow-sm'>
                <div className='flex justify-between gap-4 items-center p-4 bg-gray-100 rounded-t-lg'>
                    <h1 className='text-gray-700 font-bold uppercase text-xl'>Login</h1>
                    <div className='flex items-center gap-3'>
                        <div className='w-4 h-4 rounded-full bg-rose-500'></div>
                        <div className='w-4 h-4 rounded-full bg-yellow-500'></div>
                        <div className='w-4 h-4 rounded-full bg-green-500'></div>
                    </div>
                </div>
                <div className='p-4'>
                    {children}
                </div>
            </div>
        </div>
    )
}
