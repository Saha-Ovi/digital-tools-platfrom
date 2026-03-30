import React from 'react';
import DigiCard from './DigiCard';

const SelectedDigiCard = ({cardData,cart,setCart}) => {
    // console.log(cardData);
    return (
           <div className='flex justify-center'>
             <div>
                <DigiCard cardData={cardData} cart={cart} setCart={setCart}></DigiCard>
            </div>
           </div>
    );
};

export default SelectedDigiCard;