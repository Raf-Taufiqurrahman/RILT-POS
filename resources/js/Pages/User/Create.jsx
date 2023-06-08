import { Head, usePage } from '@inertiajs/inertia-react'
import { HiUserGroup } from 'react-icons/hi2';
import React, { useState } from 'react'
import MainLayout from '../../Layouts/MainLayout'
import Card from '../../Shared/Card'
import Input from '../../Shared/Input';
import Label from '../../Shared/Label';
import Save from '../../Shared/Save';
import Error from '../../Shared/Error';
import Back from '../../Shared/Back';
import { Inertia } from '@inertiajs/inertia';
export default function Create() {

    // desturct props
    const {errors} = usePage().props;

    // define state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');

    // define method submit
    const submit = async (e) => {
        e.preventDefault();

        Inertia.post('/apps/user', {
            name: name,
            email: email,
            password: password,
            password_confirmation: password_confirmation,
        })
    }

    return (
        <>
            <Head title='Create User - POS'/>
            <MainLayout>
                <div className='flex justify-center items-center'>
                    <div className='w-4/6'>
                        <Card
                            title={'ADD NEW USER'}
                            icon={<HiUserGroup size={'18'} className='text-gray-700'/>}
                            >
                            <form onSubmit={submit}>
                                <div className='mb-3'>
                                    <Label title={'Full Name'}/>
                                    <Input
                                        type={'text'}
                                        value={name} onChange={(e) => setName(e.target.value)}
                                        errors={errors.name}
                                    />
                                    {errors.name && <Error errors={errors.name}/>}
                                </div>
                                <div className='mb-3'>
                                    <Label title={'Email'}/>
                                    <Input
                                        type={'email'}
                                        value={email} onChange={(e) => setEmail(e.target.value)}
                                        errors={errors.email}
                                    />
                                    {errors.email && <Error errors={errors.email}/>}
                                </div>
                                <div className='mb-3'>
                                    <Label title={'Password'}/>
                                    <Input
                                        type={'password'}
                                        value={password} onChange={(e) => setPassword(e.target.value)}
                                        errors={errors.password}
                                    />
                                    {errors.password && <Error errors={errors.password}/>}
                                </div>
                                <div className='mb-3'>
                                    <Label title={'Password Confirmation'}/>
                                    <Input
                                        type={'password'}
                                        value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}
                                        errors={errors.password_confirmation}
                                    />
                                    {errors.password_confirmation && <Error errors={errors.password_confirmation}/>}
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <Back title={'Go Back'} url={'/apps/user'}/>
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
