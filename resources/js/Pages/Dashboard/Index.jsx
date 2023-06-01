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
                            icon={<HiChartBar size={'20'} className='text-gray-700'/>}>
                        </Card>
                    </div>
                    <div className='col-span-5'>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-row gap-2'>
                                <div className='w-1/2'>
                                    <Card
                                        title={'Sales Today'}
                                        icon={<HiPresentationChartLine size={'20'} className={'text-gray-700'}/>}
                                    >
                                        <h1 className='text-xl font-mono text-gray-700'>
                                            100 <span className='font-semibold'>Sales</span>
                                        </h1>
                                    </Card>
                                </div>
                                <div className='w-1/2'>
                                    <Card
                                        title={'Sales Today'}
                                        icon={<HiPresentationChartLine size={'20'} className={'text-gray-700'}/>}
                                    >
                                        <h1 className='text-xl font-mono text-teal-700'>
                                            <sup>Rp</sup> 1.000.000
                                        </h1>
                                    </Card>
                                </div>
                            </div>
                            <Card
                                title={'Profit Today'}
                                icon={<HiBanknotes size={'20'} className='text-gray-700'/>}
                            >
                                <h1 className='text-2xl font-mono text-teal-700'>
                                    <sup>Rp</sup> 24.000.000
                                </h1>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-12 gap-10'>
                    <div className='col-span-6'>
                        <Card
                            title={'BEST SELLING PRODUCT'}
                            icon={<HiChartPie size={'20'} className='text-gray-700'/>}>
                        </Card>
                    </div>
                    <div className='col-span-6'>
                        <Card
                            title={'PRODUCTS STOCK'}
                            icon={<HiShoppingBag size={'20'} className='text-gray-700'/>}>
                            <div className='grid grid-col-1 divide-y divide-dashed'>
                                <div className='flex justify-between items-center p-4'>
                                    <div className='flex flex-col'>
                                        <h1 className='text-gray-700 text-xl font-semibold capitalize'>Aqua 1,5 Liter</h1>
                                        <p className='text-gray-500 text-sm'>Category : Air Mineral</p>
                                    </div>
                                    <div className='rounded-full bg-rose-500 px-3 py-1 text-gray-50'>
                                        5
                                    </div>
                                </div>
                                <div className='flex justify-between items-center p-4'>
                                    <div className='flex flex-col'>
                                        <h1 className='text-gray-700 text-xl font-semibold capitalize'>Minyak Goreng Merk Tropical 2 Liter</h1>
                                        <p className='text-gray-500 text-sm flex items-center gap-2'>
                                            Category : Minyak Goreng
                                        </p>
                                    </div>
                                    <div className='rounded-full bg-rose-500 px-3 py-1 text-gray-50'>
                                        2
                                    </div>
                                </div>
                                <div className='flex justify-between items-center p-4'>
                                    <div className='flex flex-col'>
                                        <h1 className='text-gray-700 text-xl font-semibold capitalize'>Minyak Goreng Merk Tropical 2 Liter</h1>
                                        <p className='text-gray-500 text-sm flex items-center gap-2'>
                                            Category : Minyak Goreng
                                        </p>
                                    </div>
                                    <div className='rounded-full bg-rose-500 px-3 py-1 text-gray-50'>
                                        2
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
