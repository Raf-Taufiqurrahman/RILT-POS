import { Head, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import MainLayout from '../../Layouts/MainLayout'
import Table from '../../Shared/Table'
import { BsDatabaseFillX } from "react-icons/bs";
import Pagination from '../../Shared/Pagination';
import Search from '../../Shared/Search';
import { HiUserCircle } from 'react-icons/hi2';
export default function Index() {

    // destruct props
    const {permissions} = usePage().props

    return (
        <>
            <Head title='Permission - POS'/>
            <MainLayout>
                <div className='flex justify-end items-center mb-3'>
                    <div className='w-1/2'>
                        <Search url={'/apps/permission'}/>
                    </div>
                </div>
                <Table.Card icon={<HiUserCircle size={'18'} className='text-gray-700'/>} title={'Permissions'}>
                    <Table>
                        <Table.Thead className='bg-gray-50'>
                            <tr>
                                <Table.Th className={'w-10'}>#</Table.Th>
                                <Table.Th>Permission Name</Table.Th>
                            </tr>
                        </Table.Thead>
                        <Table.Tbody>
                        {permissions.data.length ?
                            permissions.data.map((permission, i) => (
                                <tr key={i}>
                                    <Table.Td>
                                        {++i + (permissions.current_page-1) * permissions.per_page}
                                    </Table.Td>
                                    <Table.Td>{permission.name}</Table.Td>
                                </tr>
                            ))
                            :
                            <Table.Empty colSpan={4} message={
                                <>
                                    <div className='flex justify-center text-center items-center mb-2'>
                                        <BsDatabaseFillX size={'30'} className='text-gray-700'/>
                                    </div>
                                    Your permissions is currently <span className='text-rose-500 underline underline-offset-2'>empty.</span>
                                </>
                            }/>
                        }
                        </Table.Tbody>
                    </Table>
                </Table.Card>
                <Pagination links={permissions.links}/>
            </MainLayout>
        </>
    )
}
