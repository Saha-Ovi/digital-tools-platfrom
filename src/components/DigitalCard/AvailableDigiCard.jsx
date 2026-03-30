import React, { use, useState } from 'react';
import SelectedDigiCard from './SelectedDigiCard';

const AvailableDigiCard = ({ DigitalCardPromise }) => {
    const DigiCardsData = use(DigitalCardPromise);
    const [activeTab,setActiveTab]=useState("products");
    // console.log(DigiCardsData);
    return (
        <div className='container mx-auto space-y-8'>
            <div className='text-center max-w-xl mx-auto space-y-3'>
                <h2 className='text-3xl lg:text-5xl'>Premium Digital Tools</h2>
                <p className='text-center'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            </div>
            <div className='flex justify-center'>
                {/* Tab */}
                <div className="tabs tabs-box bg-transparent gap-10">
                    <input onClick={()=>setActiveTab("products")} type="radio" name="my_tabs_1" className={`tab w-40 rounded-full ${activeTab==="products"? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white":"bg-base-200 text-black"}`} aria-label="Products" defaultChecked />
                    <input onClick={()=>setActiveTab("cart")}  type="radio" name="my_tabs_1" className={`tab w-40 rounded-full ${activeTab==="cart"? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white":"bg-base-200 text-black"}`} aria-label="Cart"  />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5'>
                {
                    DigiCardsData.map(cardData => <SelectedDigiCard key={cardData.id} cardData={cardData} ></SelectedDigiCard>)
                }
            </div>
        </div>
    );
};

export default AvailableDigiCard;