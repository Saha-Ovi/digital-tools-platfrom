import React from 'react';

const DigiBoard = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] my-5 '>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 justify-between text-center text-white px-6 lg:px-52 py-16 divide-y lg:divide-y-0 lg:divide-x divide-white/20'>
                <div className='py-6 lg-py-0'>
                    <h1 className='text-5xl lg:text-6xl font-extrabold'>50K+</h1>
                    <p className='text-xl lg:text-2xl'>Active Users</p>
                </div>
                
                <div className='py-6 lg-py-0'>
                    <h1 className='text-5xl lg:text-6xl font-extrabold'>200+</h1>
                    <p className='text-xl lg:text-2xl'>Premium Tools</p>
                </div>
                <div className='py-6 lg-py-0'>
                    <h1 className='text-5xl lg:text-6xl font-extrabold'>4.9</h1>
                    <p className='text-xl lg:text-2xl'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default DigiBoard;