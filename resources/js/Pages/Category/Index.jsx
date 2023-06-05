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
export default function Index() {

    // destruct props
    const {categories} = usePage().props

    return (
        <>
            <Head title='Category - POS'/>
            <MainLayout>
                <div className='flex gap-4 justify-between items-center mb-3'>
                    <Add label={'Add New Category'} url={'/apps/category/create'}/>
                    <div className='w-1/2'>
                        <Search url={'/apps/category'}/>
                    </div>
                </div>
                <Table.Card icon={<HiCollection size={'18'} className='text-gray-700'/>} title={'Categories'}>
                    <Table>
                        <Table.Thead className='bg-gray-50'>
                            <tr>
                                <Table.Th className={'w-10 text-center'}>#</Table.Th>
                                <Table.Th className={'text-center'}>Category Image</Table.Th>
                                <Table.Th className={'text-center'}>Category Name</Table.Th>
                                <Table.Th className={'text-center'}>Action</Table.Th>
                            </tr>
                        </Table.Thead>
                        <Table.Tbody>
                        {categories.data.length ?
                            categories.data.map((category, i) => (
                                <tr key={i}>
                                    <Table.Td className={'text-center'}>
                                        {++i + (categories.current_page-1) * categories.per_page}
                                    </Table.Td>
                                    <Table.Td>
                                        <div className='flex justify-center'>
                                            <img src={category.image} className='w-10 h-10 rounded-full'/>
                                        </div>
                                    </Table.Td>
                                    <Table.Td className={'text-center'}>{category.name}</Table.Td>
                                    <Table.Td>
                                        <div className='flex gap-2 justify-center items-center'>
                                            <Edit url={`/apps/category/${category.id}/edit`} label={'Edit'}/>
                                            <Delete url={'/apps/category'} id={category.id} label={'Delete'}/>
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
                                    Your categories is currently <span className='text-rose-500 underline underline-offset-2'>empty.</span>
                                </>
                            }/>
                        }
                        </Table.Tbody>
                    </Table>
                </Table.Card>
                <Pagination links={categories.links}/>
            </MainLayout>
        </>
    )
}
