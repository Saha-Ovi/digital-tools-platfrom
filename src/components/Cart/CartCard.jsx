import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';

const CartCard = ({item,handleRemove}) => {
    return (
        <div className='space-y-8'>
            <div className='flex flex-col lg:flex-row justify-between items-center p-6 shadow-2xl bg-gray-100 rounded-2xl'>
                {/* left */}
                <div className='flex  justify-between items-center gap-4'>
                    <div className='border border-zinc-200 p-2 rounded-full bg-white'>
                        {item.icon}
                    </div>
                    <div className='flex flex-row gap-1 lg:flex-col'>
                        <h2 className='text-xl font-extrabold'>{item.name}</h2>
                        <p className='text-lg font-bold'>$ {item.price}</p>
                    </div>
                </div>
                {/* right */}
                <div onClick={()=>handleRemove(item)}>
                    <h2 className='btn text-red-500'>Remove </h2> 
                </div>
            </div>
        </div>
    );
};

export default CartCard;