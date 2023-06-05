import { Head, useForm } from '@inertiajs/inertia-react'
import React from 'react'
import AuthLayout from '../../Layouts/AuthLayout'
import InputGroup from '../../Shared/InputGroup'
import {  IconLockPin, IconMail } from '@tabler/icons-react'
import Save from '../../Shared/Save'
import Label from '../../Shared/Label'
import Error from '../../Shared/Error'
export default function Login() {

    // define useform
    const {data, setData, post, errors} = useForm({
        email: '',
        password: '',
    });

    // define method submit
    function submit(e) {
        e.preventDefault();
        post('/login')
    }

    return (
        <>
            <Head title='Login - POS'/>
            <AuthLayout>
                <form onSubmit={submit}>
                    <div className='mb-3'>
                        <Label title={'Email'}/>
                        <InputGroup
                            type={'email'}
                            icon={(<IconMail
                            strokeWidth={'1.2'}
                            size={'20'}/>)}
                            value={data.email} onChange={e => setData('email', e.target.value)}
                            errors={errors.email}
                        />
                        {errors.email && <Error errors={errors.email}/>}
                    </div>
                    <div className='mb-3'>
                        <Label title={'Password'}/>
                        <InputGroup
                            type={'password'}
                            icon={(<IconLockPin
                            strokeWidth={'1.2'} size={'20'}/>)}
                            value={data.password} onChange={e => setData('password', e.target.value)}
                            errors={errors.password}
                        />
                        {errors.password && <Error errors={errors.password}/>}
                    </div>
                    <Save title={'Login'}/>
                </form>
            </AuthLayout>
        </>
    )
}
