import React from 'react'
import TransactionLayout from '../../Layouts/TransactionLayout'
import { Head, usePage } from '@inertiajs/inertia-react'
import { CiBarcode, CiDiscount1, CiUser } from "react-icons/ci";
import {BsCashCoin} from "react-icons/bs";
import Select from 'react-select'
import Label from '../../Shared/Label'
export default function Index() {

    // destruct props
    const {categories, products, auth} = usePage().props;

    return (
        <>
            <Head title='Transaction - POS'/>
            <TransactionLayout>
                <div className='grid grid-cols-12 gap-10'>
                    <div className='col-span-8'>
                        <div className='flex gap-2 items-center'>
                            {categories.map((category, index) => (
                                <div className='bg-white px-4 py-2 rounded-lg' key={index}>
                                    {category.name}
                                </div>
                            ))}
                        </div>
                        <div className='mt-3 mb-6'>
                            <form>
                                <div className='relative'>
                                    <input
                                        type='text'
                                        className='py-2 px-4 pl-11 block w-full rounded-lg text-sm focus:z-10 bg-white focus:outline-none focus:ring-1 focus:ring-sky-500 text-gray-700'
                                        placeholder='Search for an item'
                                    />
                                    <div className='absolute inset-y-0 left-4 flex items-center pointer-events-none z-20 pr-4'>
                                        <CiBarcode size={'18'} className='text-gray-500'/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='grid grid-cols-3 gap-6 items-start'>
                            {products.data.map((product, index) => (
                                <div className='relative' key={index}>
                                    <div className='absolute right-0 px-2 py-0.5 top-0 bg-gray-100 text-sm font-semibold text-gray-700 rounded-tr-lg'>
                                        {product.category.name}
                                    </div>
                                    <div className='flex justify-center bg-white border-b border-dashed p-2 rounded-t-lg'>
                                        <img src={product.image}/>
                                    </div>
                                    <div className='bg-white'>
                                        <div className='border-b border-dashed py-2 px-4'>
                                            <div className='text-gray-700 font-semibold text-lg text-center'>
                                                {product.name}
                                            </div>
                                            <p className='text-center text-sm text-gray-400'>{product.description}</p>
                                        </div>
                                        <div className='flex justify-between items-center px-4 py-2'>
                                            <div className='font-semibold text-gray-700 text-2xl'>
                                                <sup>Rp</sup>{product.sell_price}
                                            </div>
                                            <div className='px-2 py-1 text-xs bg-gray-100 font-semibold text-gray-700'>
                                                {product.stock} Qty
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full'>
                                        <button type='submit' className='w-full bg-teal-600 text-white px-2 py-1.5 uppercase font-semibold hover:bg-teal-700 text-sm rounded-b-lg'>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <div className='bg-white mb-4 rounded-lg'>
                            <div className='text-lg font-semibold text-gray-700 border-b px-4 py-2'>Shopping Cart</div>
                            <div className='p-4'>
                                <div className='flex flex-col gap-4 w-full'>
                                    {products.data.map((product, index) => (
                                        <div className='flex items-center gap-2 w-full border-b py-2 border-dashed' key={index}>
                                            <div className='w-2/3 flex items-center justify-start gap-2'>
                                                <div className='p-2 bg-gray-100 rounded-lg'>
                                                    <img src={product.image} className='w-10 h-10'/>
                                                </div>
                                                <div className='text-gray-700 text-sm font-semibold'>{product.name}</div>
                                            </div>
                                            <div className='w-1/3 flex items-center justify-end gap-4'>
                                                <div className='px-2 py-1 text-xs bg-gray-100 font-semibold text-gray-700'>
                                                    {product.stock}
                                                </div>
                                                <div className='font-semibold text-gray-700 text-sm'>
                                                    <sup>Rp</sup>{product.sell_price}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='flex justify-between items-center mt-5'>
                                    <h1 className='text-gray-700 font-semibold'>Sub Total</h1>
                                    <div className='text-gray-700 font-semibold text-lg'>
                                        <sup>Rp</sup>500000
                                    </div>
                                </div>
                            </div>
                            <div className='px-4 py-2.5 bg-gray-100 rounded-b-lg'>
                                <div className='flex justify-between items-center'>
                                    <h1 className='text-gray-700 font-semibold'>Grand Total</h1>
                                    <div className='text-teal-700 font-semibold text-lg'>
                                        <sup>Rp</sup>500000
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-lg'>
                            <div className='text-lg font-semibold text-gray-700 border-b px-4 py-2'>Transaction Details</div>
                            <div className='p-4'>
                                <div className='mb-3'>
                                    <Label title={'Cashier'}/>
                                    <div className='relative'>
                                        <input
                                            type='number'
                                            className='py-2 px-4 pl-11 block w-full rounded-md text-sm focus:z-10 bg-gray-100 focus:outline-none text-gray-700 border'
                                            placeholder='Administrator'
                                            readOnly
                                        />
                                        <div className='absolute inset-y-0 left-4 flex items-center pointer-events-none z-20 pr-4'>
                                            <CiUser size={'18'} className='text-gray-500'/>
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-3'>
                                    <Label title={'Customer'}/>
                                    <Select
                                        placeholder={'Customers'}
                                    />
                                </div>
                                <div className='mb-3'>
                                    <Label title={'Discount'}/>
                                    <div className='relative'>
                                        <input
                                            type='number'
                                            className='py-2 px-4 pl-11 block w-full rounded-md text-sm focus:z-10 bg-white focus:outline-none focus:ring-1 focus:ring-sky-500 text-gray-700 border'
                                            placeholder='Discount'
                                        />
                                        <div className='absolute inset-y-0 left-4 flex items-center pointer-events-none z-20 pr-4'>
                                            <CiDiscount1 size={'18'} className='text-gray-500'/>
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-3'>
                                    <Label title={'Pay'}/>
                                    <div className='relative'>
                                        <input
                                            type='number'
                                            className='py-2 px-4 pl-11 block w-full rounded-md text-sm focus:z-10 bg-white focus:outline-none focus:ring-1 focus:ring-sky-500 text-gray-700 border'
                                            placeholder='Pay'
                                        />
                                        <div className='absolute inset-y-0 left-4 flex items-center pointer-events-none z-20 pr-4'>
                                            <BsCashCoin size={'18'} className='text-gray-500'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center py-2 gap-1'>
                            <button type='submit' className='font-semibold px-2 py-1 bg-sky-700 text-white hover:bg-sky-800 rounded-md'>
                                Pay Order & Print
                            </button>
                            <button type='reset' className='font-semibold px-2 py-1 bg-rose-700 text-white hover:bg-rose-800 rounded-md'>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </TransactionLayout>
        </>
    )
}
