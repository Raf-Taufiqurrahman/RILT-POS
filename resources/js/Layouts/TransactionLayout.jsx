import React from 'react'
import Dropdown from '../Components/Dropdown'
import { usePage } from '@inertiajs/inertia-react';
export default function TransactionLayout({children}) {

    // destruct props
    const {auth} = usePage().props;

    return (
        <div>
            <div className='w-full min-h-screen'>
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
