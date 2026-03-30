import React from 'react';
import FeaturedDigiCard from './FeaturedDigiCard';

const DigiCard = ({ cardData }) => {
    console.log(cardData);
    return (
        <div>
            <div>
                <div class="card w-96 bg-base-100 shadow-sm">
                    <div class="card-body">
                        <div className='flex justify-end'>
                            {
                                cardData.tag === "Popular" ?
                                    <span class="badge badge-md bg-[#E1E7FF] text-[#4F39F6] ">Popular</span> :
                                    cardData.tag === "New" ?
                                        <span class="badge badge-md bg-[#DBFCE7] text-[#0A883E] ">New </span> :
                                        cardData.tag === "Best Seller" ?
                                            <span class="badge badge-md bg-[#FEF3C6] text-[#BB4D00] ">Best Seller</span> :
                                            <span class="badge badge-md bg-blue-200 text-blue-500">Featured</span>
                            }
                        </div>
                        <div className="space-y-2">
                            <span className='text-3xl border border-zinc-200 p-1 rounded-full '>{cardData.icon}</span>
                            <h2 class="text-3xl font-bold mt-2">{cardData.name}</h2>
                            <p className='text-[#627382]'>{cardData.description}</p>
                            <h4>
                                <span class="text-xl font-bold text-[#101727]">$ {cardData.price}</span>
                                <span className='text-[#627382]'>/ month</span>
                             </h4>
                        </div>
                        <ul class="mt-2 flex flex-col gap-2 text-xs">
                           {
                                cardData.features.map(feature=><FeaturedDigiCard feature={feature}></FeaturedDigiCard>)
                           }
                        </ul>
                        <div class="mt-6">
                            <button class="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white btn-block rounded-2xl">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigiCard;