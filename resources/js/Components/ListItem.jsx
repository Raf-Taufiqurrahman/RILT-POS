import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'

export default function ListItem({link}) {

    // destruct props
    const { url } = usePage();

    return (
        <Link href={link.href} className={`${url.startsWith(link.href) ? 'border-l-2 border-gray-500 bg-gray-700 text-white' : '' } flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-500 rounded-lg hover:bg-gray-700 hover:text-white font-semibold`}>
            {link.icon} {link.label}
        </Link>
    )
}
