import { IconArrowNarrowRight } from '@tabler/icons-react'
import React from 'react'

export default function Save({title}) {
    return (
        <button className='flex items-center gap-1 bg-sky-800 border border-sky-500 rounded-lg text-sm px-4 py-2 text-gray-50 hover:bg-sky-900 group duration-300 font-semibold'>
            {title}
            <IconArrowNarrowRight size={'20'} strokeWidth={'1.2'} className='group-hover:translate-x-1 duration-300'/>
        </button>
    )
}
