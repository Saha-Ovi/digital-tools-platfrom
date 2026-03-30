import React, { use } from 'react';
import SelectedDigiCard from './SelectedDigiCard';

const AvailableDigiCard = ({DigitalCardPromise}) => {
    const DigiCardsData=use(DigitalCardPromise);
    // console.log(DigiCardsData);
    return (
        <div className='container mx-auto'>
            <div>

            </div>
            <div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5'>
                {
                    DigiCardsData.map(cardData=><SelectedDigiCard key={cardData.id} cardData={cardData} ></SelectedDigiCard>)
                }
            </div>
        </div>
    );
};

export default AvailableDigiCard;