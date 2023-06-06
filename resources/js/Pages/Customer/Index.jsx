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
import { HiUsers } from 'react-icons/hi2';
export default function Index() {

    // destruct props
    const {customers} = usePage().props

    return (
        <>
            <Head title='Customer - POS'/>
            <MainLayout>
                <div className='flex gap-4 justify-between items-center mb-3'>
                    <Add label={'Add New Customer'} url={'/apps/customer/create'}/>
                    <div className='w-1/2'>
                        <Search url={'/apps/customer'}/>
                    </div>
                </div>
                <Table.Card icon={<HiUsers size={'18'} className='text-gray-700'/>} title={'Customers'}>
                    <Table>
                        <Table.Thead className='bg-gray-50'>
                            <tr>
                                <Table.Th className={'w-10'}>#</Table.Th>
                                <Table.Th>Name</Table.Th>
                                <Table.Th>Telp</Table.Th>
                                <Table.Th>Address</Table.Th>
                                <Table.Th>Action</Table.Th>
                            </tr>
                        </Table.Thead>
                        <Table.Tbody>
                        {customers.data.length ?
                            customers.data.map((customer, i) => (
                                <tr key={i}>
                                    <Table.Td>
                                        {++i + (customers.current_page-1) * customers.per_page}
                                    </Table.Td>
                                    <Table.Td>{customer.name}</Table.Td>
                                    <Table.Td>{customer.no_telp}</Table.Td>
                                    <Table.Td>{customer.address}</Table.Td>
                                    <Table.Td>
                                        <div className='flex gap-2 items-center'>
                                            <Edit url={`/apps/customer/${customer.id}/edit`} label={'Edit'}/>
                                            <Delete url={'/apps/customer'} id={customer.id} label={'Delete'}/>
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
                                    Your customers is currently <span className='text-rose-500 underline underline-offset-2'>empty.</span>
                                </>
                            }/>
                        }
                        </Table.Tbody>
                    </Table>
                </Table.Card>
                <Pagination links={customers.links}/>
            </MainLayout>
        </>
    )
}
