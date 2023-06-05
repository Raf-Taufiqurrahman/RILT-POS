import { Head } from '@inertiajs/inertia-react'
import React from 'react'
import MainLayout from '../../Layouts/MainLayout'
import Card from '../../Shared/Card'
import { HiBanknotes, HiPresentationChartLine, HiChartBar, HiShoppingBag, HiChartPie} from "react-icons/hi2";
import {  HiCollection } from "react-icons/hi";
export default function Index() {
    return (
        <>
            <Head title='Dashboard - POS'/>
            <MainLayout>
                <div className='grid grid-cols-12 gap-10 mb-10'>
                    <div className='col-span-7'>
                        <Card
                            title={'SALES CHART 7 DAYS'}
                            icon={<HiChartBar size={'14'} className='text-gray-700'/>}>
                        </Card>
                    </div>
                    <div className='col-span-5'>
                    </div>
                </div>
                <div className='grid grid-cols-12 gap-10'>
                    <div className='col-span-6'>
                        <Card
                            title={'BEST SELLING PRODUCT'}
                            icon={<HiChartPie size={'14'} className='text-gray-700'/>}>
                        </Card>
                    </div>
                    <div className='col-span-6'>
                        <Card
                            title={'PRODUCTS STOCK'}
                            icon={<HiShoppingBag size={'14'} className='text-gray-700'/>}>
                            <div className='grid grid-col-1 divide-y divide-dashed'>
                                <div className='flex justify-between items-center p-2'>
                                    <div className='flex flex-col'>
                                        <h1 className='text-gray-700 text-sm font-semibold capitalize'>Aqua 1,5 Liter</h1>
                                        <p className='text-gray-500 text-xs'>Category : Air Mineral</p>
                                    </div>
                                    <div className='rounded-full bg-rose-500 px-2 py-1 text-gray-50 text-xs'>
                                        5
                                    </div>
                                </div>
                                <div className='flex justify-between items-center p-2'>
                                    <div className='flex flex-col'>
                                        <h1 className='text-gray-700 text-sm font-semibold capitalize'>Aqua 1,5 Liter</h1>
                                        <p className='text-gray-500 text-xs'>Category : Air Mineral</p>
                                    </div>
                                    <div className='rounded-full bg-rose-500 px-2 py-1 text-gray-50 text-xs'>
                                        5
                                    </div>
                                </div>
                                <div className='flex justify-between items-center p-2'>
                                    <div className='flex flex-col'>
                                        <h1 className='text-gray-700 text-sm font-semibold capitalize'>Aqua 1,5 Liter</h1>
                                        <p className='text-gray-500 text-xs'>Category : Air Mineral</p>
                                    </div>
                                    <div className='rounded-full bg-rose-500 px-2 py-1 text-gray-50 text-xs'>
                                        5
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}
