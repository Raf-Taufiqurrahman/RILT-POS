import React from 'react'
import { Link } from '@inertiajs/inertia-react';
import { IconChevronRight, IconChevronLeft } from '@tabler/icons-react';
export default function Pagination({links}) {

    return (
        <>
            <ul className="mt-2 lg:mt-5 justify-end flex items-center gap-1">
                {links.map((item, i) => {
                    return item.url != null ? (
                        item.label.includes('Previous') ? (
                            <Link className="bg-white p-1 text-sm shadow-sm rounded-lg text-gray-500 hover:bg-gray-100" key={i} href={item.url}>
                                <IconChevronLeft size={'20'} strokeWidth={'1.2'}/>
                            </Link>
                        ) : item.label.includes('Next') ? (
                            <Link className="bg-white p-1 shadow-sm text-sm rounded-lg text-gray-500 hover:bg-gray-100" key={i} href={item.url}>
                                <IconChevronRight size={'20'} strokeWidth={'1.2'}/>
                            </Link>
                        ) : (
                            <Link className={`px-2 py-1 text-sm shadow-sm rounded-lg text-gray-500 hover:bg-gray-100 ${item.active ? 'bg-gray-200 text-gray-700' : 'bg-white'}`} key={i} href={item.url}>
                                {item.label}
                            </Link>
                        )
                    ) : null;
                })}
            </ul>
        </>
    );
}
