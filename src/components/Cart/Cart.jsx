import React from 'react';
import CartCard from './CartCard';
import { toast } from 'react-toastify';
import { BsCart3 } from 'react-icons/bs';

const Cart = ({ cart, setCart }) => {
    // console.log(cart);
    const totalAmount = cart.reduce((sum, cartItem) => sum + cartItem.price, 0)

    const handleCheckout=()=>
    {
        setCart([]);
        toast.success("Proceed to checkout Successfully");
    }
    const handleRemove=(item)=>
    {
       
        const newCart=cart.filter(cartItem=>cartItem.id!== item.id)
        setCart(newCart);
        toast.error("Cart Item remove from the cart successfully");
    }
    return (
        <div className='container mx-auto border border-zinc-100 px-6 py-8 space-y-6 rounded-2xl'>
            <h2 className='text-2xl lg:text-4xl font-extrabold'>Your Cart</h2>
            <div className='space-y-6 hover:cursor-pointer'>
                {
                    cart.length === 0 ?
                        <div className='shadow-xl bg-zinc-200 rounded-2xl text-center p-4 space-y-6'>
                            <div className='flex justify-center items-center py-4 '>
                                <span className='text-6xl'><BsCart3 /></span>
                            </div>
                            <h2 className='text-2xl font-extrabold'>Cart is Empty</h2>
                            <p className='text-xl font-bold'>Please Add item to the cart</p>
                        </div>
                        :
                        cart.map(item => <CartCard key={item.id} item={item} handleRemove={handleRemove}></CartCard>)
                }
            </div>
            <div className='flex justify-between items-center bg-zinc-200 shadow-xl p-6 rounded-2xl'>
                <h2 className='text-xl font-extrabold'>Total</h2>
                <p className='text-lg font-bold'>$ {totalAmount}</p>
            </div>
            <div>
                <button onClick={handleCheckout} className='btn  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white btn-block p-3 rounded-2xl text-lg font-bold'>Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default Cart;