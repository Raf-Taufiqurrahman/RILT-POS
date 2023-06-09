import { Head, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import MainLayout from '../../Layouts/MainLayout'
import Table from '../../Shared/Table'
import { BsDatabaseFillX } from "react-icons/bs";
import { HiUserGroup } from 'react-icons/hi';
import Pagination from '../../Shared/Pagination';
import Add from '../../Shared/Add';
import Search from '../../Shared/Search';
import Edit from '../../Shared/Edit';
import Delete from '../../Shared/Delete';
export default function Index() {

    // destruct props
    const {users} = usePage().props
    console.log(users);

    return (
        <>
            <Head title='User - POS'/>
            <MainLayout>
                <div className='flex gap-4 justify-between items-center mb-3'>
                    <Add label={'Add New User'} url={'/apps/user/create'}/>
                    <div className='w-1/2'>
                        <Search url={'/apps/user'}/>
                    </div>
                </div>
                <Table.Card icon={<HiUserGroup size={'18'} className='text-gray-700'/>} title={'users'}>
                    <Table>
                        <Table.Thead className='bg-gray-50'>
                            <tr>
                                <Table.Th className={'w-10'}>#</Table.Th>
                                <Table.Th>Name</Table.Th>
                                <Table.Th>Email</Table.Th>
                                <Table.Th>Role</Table.Th>
                                <Table.Th>Action</Table.Th>
                            </tr>
                        </Table.Thead>
                        <Table.Tbody>
                        {users.data.length ?
                            users.data.map((user, i) => (
                                <tr key={i}>
                                    <Table.Td>
                                        {++i + (users.current_page-1) * users.per_page}
                                    </Table.Td>
                                    <Table.Td>{user.name}</Table.Td>
                                    <Table.Td>{user.email}</Table.Td>
                                    <Table.Td>
                                        <span className='bg-gray-700 rounded-lg text-white px-3 py-1.5 text-xs capitalize'>
                                            {user.roles[0].name}
                                        </span>
                                    </Table.Td>
                                    <Table.Td>
                                        <div className='flex gap-2 items-center'>
                                            <Edit url={`/apps/user/${user.id}/edit`} label={'Edit'}/>
                                            <Delete url={'/apps/user'} id={user.id} label={'Delete'}/>
                                        </div>
                                    </Table.Td>
                                </tr>
                            ))
                            :
                            <Table.Empty colSpan={5} message={
                                <>
                                    <div className='flex justify-center text-center items-center mb-2'>
                                        <BsDatabaseFillX size={'30'} className='text-gray-700'/>
                                    </div>
                                    Your users is currently <span className='text-rose-500 underline underline-offset-2'>empty.</span>
                                </>
                            }/>
                        }
                        </Table.Tbody>
                    </Table>
                </Table.Card>
                <Pagination links={users.links}/>
            </MainLayout>
        </>
    )
}
