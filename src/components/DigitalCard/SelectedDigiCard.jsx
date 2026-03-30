import React from 'react';
import DigiCard from './DigiCard';

const SelectedDigiCard = ({cardData}) => {
    // console.log(cardData);
    return (
            <div className='flex justify-center'>
                <DigiCard cardData={cardData}></DigiCard>
            </div>
    );
};

export default SelectedDigiCard;