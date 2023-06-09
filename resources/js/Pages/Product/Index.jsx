import { Head, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import MainLayout from '../../Layouts/MainLayout'
import Table from '../../Shared/Table'
import Pagination from '../../Shared/Pagination';
import Add from '../../Shared/Add';
import Search from '../../Shared/Search';
import Edit from '../../Shared/Edit';
import Delete from '../../Shared/Delete';
import { HiShoppingBag } from 'react-icons/hi';
import { BsDatabaseFillX } from "react-icons/bs";
import Barcode from 'react-barcode';
export default function Index() {

    // destruct props
    const {products} = usePage().props

    console.log(products);

    return (
        <>
            <Head title='Product - POS'/>
            <MainLayout>
                <div className='flex gap-4 justify-between items-center mb-3'>
                    <Add label={'Add New Product'} url={'/apps/product/create'}/>
                    <div className='w-1/2'>
                        <Search url={'/apps/product'}/>
                    </div>
                </div>
                <Table.Card icon={<HiShoppingBag size={'18'} className='text-gray-700'/>} title={'Products'}>
                    <Table>
                        <Table.Thead className='bg-gray-50'>
                            <tr>
                                <Table.Th className={'w-10'}>#</Table.Th>
                                <Table.Th>Barcode</Table.Th>
                                <Table.Th>Product Name</Table.Th>
                                <Table.Th>Buy Price</Table.Th>
                                <Table.Th>Sell Price</Table.Th>
                                <Table.Th>Stock</Table.Th>
                                <Table.Th>Action</Table.Th>
                            </tr>
                        </Table.Thead>
                        <Table.Tbody>
                        {products.data.length ?
                            products.data.map((product, i) => (
                                <tr key={i}>
                                    <Table.Td className={'text-center'}>
                                        {++i + (products.current_page-1) * products.per_page}
                                    </Table.Td>
                                    <Table.Td>
                                        <Barcode value={product.barcode} height={20} fontSize={'12px'} format={'CODE39'}/>
                                    </Table.Td>
                                    <Table.Td>{product.name}</Table.Td>
                                    <Table.Td>
                                        <sup>Rp</sup> {product.buy_price}
                                    </Table.Td>
                                    <Table.Td>
                                        <sup>Rp</sup> {product.sell_price}
                                    </Table.Td>
                                    <Table.Td>{product.stock}</Table.Td>
                                    <Table.Td>
                                        <div className='flex gap-2 justify-center items-center'>
                                            <Edit url={`/apps/product/${product.id}/edit`} label={'Edit'}/>
                                            <Delete url={'/apps/product'} id={product.id} label={'Delete'}/>
                                        </div>
                                    </Table.Td>
                                </tr>
                            ))
                            :
                            <Table.Empty colSpan={7} message={
                                <>
                                    <div className='flex justify-center text-center items-center mb-2'>
                                        <BsDatabaseFillX size={'30'} className='text-gray-700'/>
                                    </div>
                                    Your products is currently <span className='text-rose-500 underline underline-offset-2'>empty.</span>
                                </>
                            }/>
                        }
                        </Table.Tbody>
                    </Table>
                </Table.Card>
                <Pagination links={products.links}/>
            </MainLayout>
        </>
    )
}
