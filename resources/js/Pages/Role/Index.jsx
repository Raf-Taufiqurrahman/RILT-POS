import { Head, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import MainLayout from '../../Layouts/MainLayout'
import Table from '../../Shared/Table'
import { BsDatabaseFillX } from "react-icons/bs";
import {HiCollection} from 'react-icons/hi';
import Pagination from '../../Shared/Pagination';
import Add from '../../Shared/Add';
import Search from '../../Shared/Search';
import Edit from '../../Shared/Edit';
import Delete from '../../Shared/Delete';
import { HiIdentification } from 'react-icons/hi';
export default function Index() {

    // destruct props
    const {roles} = usePage().props

    return (
        <>
            <Head title='Role - POS'/>
            <MainLayout>
                <div className='flex gap-4 justify-between items-center mb-3'>
                    <Add label={'Add New Role'} url={'/apps/role/create'}/>
                    <div className='w-1/2'>
                        <Search url={'/apps/role'}/>
                    </div>
                </div>
                <Table.Card icon={<HiIdentification size={'18'} className='text-gray-700'/>} title={'Roles'}>
                    <Table>
                        <Table.Thead className='bg-gray-50'>
                            <tr>
                                <Table.Th className={'w-10'}>#</Table.Th>
                                <Table.Th>Role Name</Table.Th>
                                <Table.Th>Permissions</Table.Th>
                                <Table.Th>Action</Table.Th>
                            </tr>
                        </Table.Thead>
                        <Table.Tbody>
                        {roles.data.length ?
                            roles.data.map((role, i) => (
                                <tr key={i}>
                                    <Table.Td>
                                        {++i + (roles.current_page-1) * roles.per_page}
                                    </Table.Td>
                                    <Table.Td>{role.name}</Table.Td>
                                    <Table.Td>
                                        <div className='flex flex-wrap gap-1.5'>
                                            {role.permissions.map((permission, index) => (
                                                <div className='bg-sky-700 rounded-lg text-white px-3 py-1.5 text-xs' key={index}>{permission.name}</div>
                                            ))}
                                        </div>
                                    </Table.Td>
                                    <Table.Td>
                                        <div className='flex gap-2 justify-center items-center'>
                                            <Edit url={`/apps/role/${role.id}/edit`} label={'Edit'}/>
                                            <Delete url={'/apps/role'} id={role.id} label={'Delete'}/>
                                        </div>
                                    </Table.Td>
                                </tr>
                            ))
                            :
                            <Table.Empty colSpan={4} message={
                                <>
                                    <div className='flex justify-center text-center items-center mb-2'>
                                        <BsDatabaseFillX size={'30'} className='text-gray-700'/>
                                    </div>
                                    Your roles is currently <span className='text-rose-500 underline underline-offset-2'>empty.</span>
                                </>
                            }/>
                        }
                        </Table.Tbody>
                    </Table>
                </Table.Card>
                <Pagination links={roles.links}/>
            </MainLayout>
        </>
    )
}
