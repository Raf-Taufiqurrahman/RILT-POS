import { Head, usePage } from '@inertiajs/inertia-react'
import {HiCollection} from 'react-icons/hi';
import React, { useState } from 'react'
import MainLayout from '../../Layouts/MainLayout'
import Card from '../../Shared/Card'
import Input from '../../Shared/Input';
import Label from '../../Shared/Label';
import Save from '../../Shared/Save';
import Error from '../../Shared/Error';
import Back from '../../Shared/Back';
import { Inertia } from '@inertiajs/inertia';
import { HiUsers } from 'react-icons/hi2';
import Textarea from '../../Shared/Textarea';
export default function Create() {

    // desturct props
    const {errors, customer} = usePage().props;

    // define state
    const [name, setName] = useState(customer.name);
    const [telp, setTelp] = useState(customer.no_telp);
    const [address, setAddress] = useState(customer.address);

    // define method submit
    const submit = async (e) => {
        e.preventDefault();

        Inertia.post(`/apps/customer/${customer.id}`, {
            name: name,
            address: address,
            no_telp: telp,
            _method: 'PUT',
        })
    }

    return (
        <>
            <Head title='Edit Customer - POS'/>
            <MainLayout>
                <div className='flex justify-center items-center'>
                    <div className='w-4/6'>
                        <Card
                            title={'EDIT CUSTOMER'}
                            icon={<HiUsers size={'18'} className='text-gray-700'/>}
                            >
                            <form onSubmit={submit}>
                                <div className='mb-3'>
                                    <Label title={'Customer Name'}/>
                                    <Input
                                        type={'text'}
                                        value={name} onChange={(e) => setName(e.target.value)}
                                        errors={errors.name}
                                    />
                                    {errors.name && <Error errors={errors.name}/>}
                                </div>
                                <div className='mb-3'>
                                    <Label title={'Customer Telp'}/>
                                    <Input
                                        type={'number'}
                                        value={telp} onChange={(e) => setTelp(e.target.value)}
                                        errors={errors.no_telp}
                                    />
                                    {errors.no_telp && <Error errors={errors.no_telp}/>}
                                </div>
                                <div className='mb-3'>
                                    <Label title={'Customer Address'}/>
                                    <Textarea
                                        value={address} onChange={(e) => setAddress(e.target.value)}
                                        errors={errors.address}
                                    />
                                    {errors.address && <Error errors={errors.address}/>}
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <Back title={'Go Back'} url={'/apps/customer'}/>
                                    <Save title={'Save'}/>
                                </div>
                            </form>
                        </Card>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}
