import React from 'react';

const DigiBoard = () => {
    return (
        <div className=' bg-linear bg-linear-to-r from-[#4F39F6] to-[#9514FA] my-5 '>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 justify-between text-center text-white px-52 py-16 lg:divide-x'>
                <div>
                    <h1 className='text-6xl font-extrabold'>50K+</h1>
                    <p className='text-2xl'>Active Users</p>
                </div>
                
                <div>
                    <h1 className='text-6xl font-extrabold'>200+</h1>
                    <p className='text-2xl'>Premium Tools</p>
                </div>
                <div>
                    <h1 className='text-6xl font-extrabold'>4.9</h1>
                    <p className='text-2xl'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default DigiBoard;