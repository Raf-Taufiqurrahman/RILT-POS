import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import { HiOutlineArrowPath } from "react-icons/hi2";

export default function Back({url, title}) {
    return (
        <Link href={url} className='flex items-center gap-1 bg-rose-800 border border-rose-500 rounded-lg text-xs px-4 py-2 text-gray-50 hover:bg-rose-900 group duration-300 font-semibold'>
            {title}
            <HiOutlineArrowPath size={'16'} className='group-hover:rotate-90 duration-300'/>
        </Link>
    )
}


