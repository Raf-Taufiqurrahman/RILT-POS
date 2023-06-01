import React from 'react'
import { Menu } from '@headlessui/react'
import { Link } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'
import { IconHome2, IconLogout, IconChevronDown } from '@tabler/icons-react'
export default function Dropdown({auth}) {

    // define method logout
    const Logout = async (e) => {
        e.preventDefault();

        Inertia.post('/logout');
    }

    return (
        <Menu className='relative z-40' as='div'>
            <Menu.Button className='p-2 flex items-center gap-2 text-sm'>
                <img src='/images/avatar.png' className="rounded-full w-8 h-8 object-cover object-center"/>
                <span className='hidden lg:flex gap-2 items-center font-semibold text-gray-700'>
                    {auth.user.name}
                    <IconChevronDown size={'20'} strokeWidth={'1.2'}/>
                </span>
                <span className='flex lg:hidden items-center gap-2 font-semibold text-gray-700'>
                    {auth.user.name.slice(0,3)}{auth.user.name.length <= 50 ? '...' : ''}
                    <IconChevronDown size={'20'} strokeWidth={'1.2'}/>
                </span>
            </Menu.Button>
            <Menu.Items className='absolute bg-white overflow-hidden rounded-md w-48 border p-2 mt-1 right-0 flex flex-col divide-y divide-dashed'>
                <Menu.Item className='p-3 text-sm text-gray-700 hover:text-blue-500' as='div'>
                    <button onClick={Logout} className='flex items-center gap-2'>
                        <IconLogout width={'20'} strokeWidth={'1.2'}/> Logout
                    </button>
                </Menu.Item>
            </Menu.Items>
        </Menu>
    )
}
