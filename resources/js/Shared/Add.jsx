import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import { HiPlusCircle } from "react-icons/hi2";
export default function Add({label, url}) {
    return (
        <Link href={url} className='flex items-center gap-1 py-2 px-4 rounded-lg bg-white font-semibold text-sm shadow-sm hover:bg-gray-50'>
            <HiPlusCircle size={'18'} className='text-gray-700'/> {label}
        </Link>
    )
}
