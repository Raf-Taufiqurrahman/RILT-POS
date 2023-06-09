import React from 'react'
import Sidebar from '../Components/Sidebar'
import Dropdown from '../Components/Dropdown'
import { usePage } from '@inertiajs/inertia-react'

export default function MainLayout({children}) {

    // destruct props
    const {auth} = usePage().props;

    return (
        <div className='w-full min-h-screen flex flex-row overflow-auto'>
            <Sidebar/>
            <div className='w-full'>
                <div className='w-full border-b bg-white py-2 px-4'>
                    <div className='container mx-auto'>
                        <div className='flex justify-end'>
                            <Dropdown auth={auth}/>
                        </div>
                    </div>
                </div>
                <div className='container mx-auto'>
                    <div className='p-8'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
