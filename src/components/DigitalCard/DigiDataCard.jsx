import React from 'react';
import SelectedDigiCard from './SelectedDigiCard';

const DigiDataCard = ({DigiCardsData,cart,setCart}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5'>
             {
                    DigiCardsData.map(cardData =><SelectedDigiCard key={cardData.id} cardData={cardData} cart={cart} setCart={setCart}></SelectedDigiCard>)
                }
        </div>
    );
};

export default DigiDataCard;