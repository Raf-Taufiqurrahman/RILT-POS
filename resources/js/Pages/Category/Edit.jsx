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
export default function Edit() {

    // desturct props
    const { category, errors } = usePage().props;

    // define state
    const [name, setName] = useState(category.name);
    const [image, setImage] = useState(null);

    // define method submit
    const submit = async (e) => {
        e.preventDefault();

        Inertia.post(`/apps/category/${category.id}`, {
            name : name,
            image: image,
            _method: 'PUT'
        })
    }

    return (
        <>
            <Head title='Update Category - POS'/>
            <MainLayout>
                <div className='flex justify-center items-center'>
                    <div className='w-4/6'>
                        <Card
                            title={'UPDATE CATEGORY'}
                            icon={<HiCollection size={'18'} className='text-gray-700'/>}
                            >
                            <form onSubmit={submit}>
                                <div className='mb-3'>
                                    <Label title={'Category Name'}/>
                                    <Input
                                        type={'text'}
                                        value={name} onChange={(e) => setName(e.target.value)}
                                        errors={errors.name}
                                    />
                                    {errors.name && <Error errors={errors.name}/>}
                                </div>
                                <div className='mb-3'>
                                    <Label title={'Category Image'}/>
                                    <Input
                                        type={'file'}
                                        onChange={(e) => setImage(e.target.files[0])}
                                        errors={errors.image}
                                    />
                                    {errors.image && <Error errors={errors.image}/>}
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <Back title={'Go Back'} url={'/apps/category'}/>
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
