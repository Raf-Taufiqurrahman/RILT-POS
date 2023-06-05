import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import { HiPencilAlt } from "react-icons/hi";
export default function Edit({url, label}) {
    return (
        <Link href={url} className='flex items-center gap-1 py-2 px-4 rounded-lg bg-yellow-200 font-semibold text-sm shadow-sm hover:bg-yellow-300'>
            <HiPencilAlt size={'16'} className='text-gray-700'/> {label}
        </Link>
    )
}
