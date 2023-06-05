import { Inertia } from '@inertiajs/inertia';
import { IconSearch } from '@tabler/icons-react';
import React, { useState } from 'react'
import { HiSearch } from "react-icons/hi";
export default function Search({url}) {

     // define state
    const [search, setSearch] = useState('');

    // define method searchData
    const searchData = (e) => {
        e.preventDefault();

        Inertia.get(`${url}?search=${search}`)
    }

    return (
        <>
            <form onSubmit={searchData}>
                <div className='relative'>
                    <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} className='py-2 px-4 pr-11 block w-full rounded-lg text-sm focus:z-10 bg-white focus:outline-none focus:ring-1 focus:ring-sky-500 text-gray-700 shadow-sm'/>
                    <div className='absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 pr-4'>
                        <HiSearch size={'18'} className='text-gray-500'/>
                    </div>
                </div>
            </form>
        </>
    )
}
