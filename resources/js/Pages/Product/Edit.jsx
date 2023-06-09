import { Head, usePage } from '@inertiajs/inertia-react'
import {HiCollection, HiShoppingBag} from 'react-icons/hi';
import React, { useState } from 'react'
import MainLayout from '../../Layouts/MainLayout'
import Card from '../../Shared/Card'
import Input from '../../Shared/Input';
import Label from '../../Shared/Label';
import Save from '../../Shared/Save';
import Error from '../../Shared/Error';
import Back from '../../Shared/Back';
import { Inertia } from '@inertiajs/inertia';
import Select from '../../Shared/Select';
import Textarea from '../../Shared/Textarea';
export default function Edit() {

    // desturct props
    const {errors, categories, product} = usePage().props;

    // define state
    const [name, setName] = useState(product.name);
    const [category_id, setCategoryId] = useState(product.category_id);
    const [barcode, setBarcode] = useState(product.barcode);
    const [stock, setStock] = useState(product.stock);
    const [buy_price, setBuyPrice] = useState(product.buy_price);
    const [sell_price, setSellPrice] = useState(product.sell_price);
    const [description, setDescription] = useState(product.description);
    const [image, setImage] = useState(null);

    // define method submit
    const submit = async (e) => {
        e.preventDefault();

        Inertia.post(`/apps/product/${product.id}`, {
            name: name,
            barcode: barcode,
            category_id: category_id,
            stock: stock,
            buy_price: buy_price,
            sell_price: sell_price,
            image: image,
            description: description,
            _method: 'PUT',
        })
    }

    return (
        <>
            <Head title='Edit Product - POS'/>
            <MainLayout>
                <div className='flex justify-center items-center'>
                    <div className='w-4/6'>
                        <Card
                            title={'EDIT PRODUCT'}
                            icon={<HiShoppingBag size={'18'} className='text-gray-700'/>}
                            >
                            <form onSubmit={submit}>
                                <div className='mb-3'>
                                    <Label title={'Product Name'}/>
                                    <Input
                                        type={'text'}
                                        value={name} onChange={(e) => setName(e.target.value)}
                                        errors={errors.name}
                                    />
                                    {errors.name && <Error errors={errors.name}/>}
                                </div>
                                <div className='mb-3'>
                                    <Label title={'Product Image'}/>
                                    <Input
                                        type={'file'}
                                        onChange={(e) => setImage(e.target.files[0])}
                                        errors={errors.image}
                                    />
                                    {errors.image && <Error errors={errors.image}/>}
                                </div>
                                <div className='flex gap-2 items-center mb-3'>
                                    <div className='w-full md:w-1/2'>
                                        <Label title={'Product Barcode'}/>
                                        <Input
                                            type={'text'}
                                            value={barcode} onChange={(e) => setBarcode(e.target.value)}
                                            errors={errors.barcode}
                                        />
                                        {errors.barcode && <Error errors={errors.barcode}/>}
                                    </div>
                                    <div className='w-full md:w-1/2'>
                                        <Label title={'Product Category'}/>
                                        <Select value={category_id} onChange={(e) => setCategoryId(e.target.value)}>
                                                <option>Select Category</option>
                                            {categories.map((category, index) => (
                                                <option value={category.id} key={index}>{category.name}</option>
                                            ))}
                                        </Select>
                                        {errors.category_id && <Error errors={errors.category_id}/>}
                                    </div>
                                </div>
                                <div className='mb-3'>
                                    <Label title={'Product Stock'}/>
                                    <Input
                                        type={'number'}
                                        value={stock} onChange={(e) => setStock(e.target.value)}
                                        errors={errors.stock}
                                    />
                                    {errors.stock && <Error errors={errors.stock}/>}
                                </div>
                                <div className='flex gap-2 items-center mb-3'>
                                    <div className='w-full md:w-1/2'>
                                        <Label title={'Product Buy Price'}/>
                                        <Input
                                            type={'number'}
                                            value={buy_price} onChange={(e) => setBuyPrice(e.target.value)}
                                            errors={errors.buy_price}
                                        />
                                        {errors.buy_price && <Error errors={errors.buy_price}/>}
                                    </div>
                                    <div className='w-full md:w-1/2'>
                                        <Label title={'Product Sell Price'}/>
                                        <Input
                                            type={'number'}
                                            value={sell_price} onChange={(e) => setSellPrice(e.target.value)}
                                            errors={errors.sell_price}
                                        />
                                        {errors.sell_price && <Error errors={errors.sell_price}/>}
                                    </div>
                                </div>
                                <div className='mb-3'>
                                    <Label title={'Product Description'}/>
                                    <Textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        errors={errors.description}
                                    />
                                    {errors.description && <Error errors={errors.description}/>}
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <Back title={'Go Back'} url={'/apps/product'}/>
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
