import React, { useState } from 'react';
import FeaturedDigiCard from './FeaturedDigiCard';
import { toast } from 'react-toastify';

const DigiCard = ({ cardData, cart, setCart }) => {
    // console.log(cardData);
    // console.log(cart);
    const [isCart, setIsCart] = useState(false);
    const handledButton = () => {
        const exist = cart.find(cartItem => cartItem.id === cardData.id);
        // setIsCart(!isCart);
        if (!exist) {
            setIsCart(true);
            setCart([...cart, cardData]);
            toast.success("Item is added to the cart");
        }
        else {
            const newCart = cardData.filter(cardItem => cardItem.id !== cardData.id)
            setCart(newCart);
            toast.error("Item is already added to the card");
        }

    }
    return (
        <div>
            <div>
                <div className="card w-96 bg-base-100 shadow-sm">
                    <div className="card-body">
                        <div className='flex justify-end'>
                            {
                                cardData.tag === "Popular" ?
                                    <span className="badge badge-md bg-[#E1E7FF] text-[#4F39F6] ">Popular</span> :
                                    cardData.tag === "New" ?
                                        <span className="badge badge-md bg-[#DBFCE7] text-[#0A883E] ">New </span> :
                                        cardData.tag === "Best Seller" ?
                                            <span className="badge badge-md bg-[#FEF3C6] text-[#BB4D00] ">Best Seller</span> :
                                            <span className="badge badge-md bg-blue-200 text-blue-500">Featured</span>
                            }
                        </div>
                        <div className="space-y-2">
                            <span className='text-3xl border border-zinc-200 p-1 rounded-full '>{cardData.icon}</span>
                            <h2 className="text-3xl font-bold mt-2">{cardData.name}</h2>
                            <p className='text-[#627382]'>{cardData.description}</p>
                            <h4>
                                <span className="text-xl font-bold text-[#101727]">$ {cardData.price}</span>
                                <span className='text-[#627382]'>/ month</span>
                            </h4>
                        </div>
                        <ul className="mt-2 flex flex-col gap-2 text-xs">
                            {
                                cardData.features.map((feature, index) => <FeaturedDigiCard key={index} feature={feature}></FeaturedDigiCard>)
                            }
                        </ul>
                        <div className="mt-6">
                            <button onClick={handledButton} className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white btn-block rounded-2xl">
                                {
                                    isCart ? "Added to cart" : "Buy Now"
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigiCard;