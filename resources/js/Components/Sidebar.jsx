import React from 'react'
import Permission from '../Utils/Permission'
import ListItem from './ListItem'
import { HiReceiptPercent, HiUsers } from 'react-icons/hi2';
import { HiCollection, HiShoppingBag, HiUserCircle, HiViewGrid, HiPresentationChartLine, HiPresentationChartBar,
HiUserGroup, HiIdentification } from 'react-icons/hi';
export default function Sidebar() {

    // define links dashboard
    const dashboard = {
        label   : 'Dashboard',
        href    : '/apps/dashboard',
        // icon    : <IconStack2 size={'20'} strokeWidth={'1.2'}/>,
        icon    : <HiViewGrid size={'20'}/>,
        key     : Permission(['dashboard-index'])
    }

    // define links master
    const master = [
        {   label   : 'Categories',
            href    : '/apps/category',
            // icon    : <IconFolders size={'20'} strokeWidth={'1.2'}/>,
            icon    : <HiCollection size={'20'}/>,
            key     : Permission(['category-index'])
        },
        {   label   : 'Products',
            href    : '/apps/product',
            // icon    : <IconShoppingBag size={'20'} strokeWidth={'1.2'}/>,
            icon    : <HiShoppingBag size={'20'}/>,
            key     : Permission(['product-index'])
        },
        {   label   : 'Customers',
            href    : '/apps/customer',
            // icon    : <IconUserCircle size={'20'} strokeWidth={'1.2'}/>,
            icon    : <HiUsers size={'20'}/>,
            key     : Permission(['customer-index'])
        },
    ]

    // define links transactions
    const transaction = {
        label   : 'Transactions',
        href    : '/apps/transaction',
        // icon    : <IconReceipt size={'20'} strokeWidth={'1.2'}/>,
        icon    : <HiReceiptPercent size={'20'}/>,
        key     : Permission(['transaction-index'])
    }

    // define links transactions
    const reports = [
        {   label   : 'Report Sales',
            href    : '/apps/sales',
            // icon    : <IconChartInfographic size={'20'} strokeWidth={'1.2'}/>,
            icon    : <HiPresentationChartLine size={'20'}/>,
            key     : Permission(['transaction-index'])
        },
        {   label   : 'Report Profit',
            href    : '/apps/sales',
            // icon    : <IconDeviceDesktopAnalytics size={'20'} strokeWidth={'1.2'}/>,
            icon    : <HiPresentationChartBar size={'20'}/>,
            key     : Permission(['transaction-index'])
        },
    ]

    // define links users
    const users = [
        {   label   : 'Permissions',
            href    : '/apps/permission',
            // icon    : <IconUserBolt size={'20'} strokeWidth={'1.2'}/>,
            icon    : <HiUserCircle size={'20'}/>,
            key     : Permission(['permission-index'])
        },
        {   label   : 'Roles',
            href    : '/apps/role',
            // icon    : <IconUserCheck size={'20'} strokeWidth={'1.2'}/>,
            icon    : <HiIdentification size={'20'}/>,
            key     : Permission(['role-index'])
        },
        {   label   : 'Users',
            href    : '/apps/user',
            // icon    : <IconUsers size={'20'} strokeWidth={'1.2'}/>,
            icon    : <HiUserGroup size={'20'}/>,
            key     : Permission(['user-index'])
        },
    ]

    return (
        <div className="h-screen w-80 bg-[#1F2937] border-r border-gray-200 pt-7 pb-10 overflow-auto">
            <div className="px-6">
                <a className="flex-none text-xl font-semibold text-gray-50 uppercase">
                    Point of Sales
                </a>
            </div>
            <nav className="p-6 w-full flex flex-col flex-wrap">
                <div className='uppercase font-semibold text-gray-700 text-sm mt-4 pb-2'>Dashboard</div>
                <ListItem link={dashboard}/>

                <div className='uppercase font-semibold text-gray-700 text-sm mt-4 pb-2'>Master Data</div>
                <ul className="space-y-3">
                    {master.map((link, index) => (
                        <div key={index}>
                            {link.key && <ListItem link={link}/>}
                        </div>
                    ))}
                </ul>

                <div className='uppercase font-semibold text-gray-700 text-sm mt-4 pb-2'>Transactions</div>
                <ListItem link={transaction}/>

                <div className='uppercase font-semibold text-gray-700 text-sm mt-4 pb-2'>Report</div>
                <ul className="space-y-3">
                    {reports.map((link, index) => (
                        <div key={index}>
                            {link.key && <ListItem link={link}/>}
                        </div>
                    ))}
                </ul>

                <div className='uppercase font-semibold text-gray-700 text-sm mt-4 pb-2'>User Management</div>
                <ul className="space-y-3">
                    {users.map((link, index) => (
                        <div key={index}>
                            {link.key && <ListItem link={link}/>}
                        </div>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
