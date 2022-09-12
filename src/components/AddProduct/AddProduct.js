import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth)
    const handleSubmit = async (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const price = event.target.price.value;
        const image = event.target.image.value;

        fetch('http://localhost:5000/products', {
            method: 'POST',
            body: JSON.stringify({ name, price, image }),
            headers: {
                'authorization': `${user.email} ${localStorage.getItem('token')}`,
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });
        event.target.reset()
    }


    return (
        <div className='w-2/6 mx-auto'>
            <h2 className='my-5 font-bold text-xl'>Add Product</h2>
            <form onSubmit={handleSubmit} className='border-2 bg-pink-400 p-16 my-5'>
                <input className='w-full block border-2 my-5 p-2' type="text" name="name" id="name" placeholder='name' required />
                <input className='w-full block border-2 my-5 p-2' type="number" name="price" id="price" placeholder='price' required />
                <input className='w-full block border-2 my-5 p-2' type="url" name="image" id="image" placeholder='image' />
                <input className='w-full block border-2 p-2 bg-pink-800 text-white cursor-pointer' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddProduct;