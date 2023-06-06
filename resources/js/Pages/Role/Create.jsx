import { Head, usePage } from '@inertiajs/inertia-react'
import { HiIdentification } from 'react-icons/hi';
import React, { useState } from 'react'
import MainLayout from '../../Layouts/MainLayout'
import Card from '../../Shared/Card'
import Input from '../../Shared/Input';
import Label from '../../Shared/Label';
import Save from '../../Shared/Save';
import Error from '../../Shared/Error';
import Back from '../../Shared/Back';
import { Inertia } from '@inertiajs/inertia';
import MultiSelect from '../../Shared/MultiSelect';
export default function Create() {

    // desturct props
    const {errors, permissions} = usePage().props;

    // define state
    const [name, setName] = useState('');
    const [permissionData, setPermissionData] = useState([]);

    // define method submit
    const submit = async (e) => {
        e.preventDefault();

        Inertia.post('/apps/role', {
            name: name,
            permissions: permissionData,
        })
    }

    return (
        <>
            <Head title='Create Role - POS'/>
            <MainLayout>
                <div className='flex justify-center items-center'>
                    <div className='w-4/6'>
                        <Card
                            title={'ADD NEW ROLE'}
                            icon={<HiIdentification size={'18'} className='text-gray-700'/>}
                            >
                            <form onSubmit={submit}>
                                <div className='mb-3'>
                                    <Label title={'Role Name'}/>
                                    <Input
                                        type={'text'}
                                        value={name} onChange={(e) => setName(e.target.value)}
                                        errors={errors.name}
                                    />
                                    {errors.name && <Error errors={errors.name}/>}
                                </div>
                                <div className='mb-3'>
                                    <Label title={'Permissions'}/>
                                    <MultiSelect
                                        options={permissions}
                                        value={permissionData}
                                        onChange={setPermissionData}
                                    />
                                    {errors.permissions && <Error errors={errors.permissions}/>}
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <Back title={'Go Back'} url={'/apps/role'}/>
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
