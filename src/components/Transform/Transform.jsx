import React from 'react';

const Transform = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]  py-20'>
            <div className='container mx-auto space-y-8'>
                {/* heading */}
                <div className='text-white text-center py-6 space-y-3'>
                    <h2 className='text-3xl lg:text-5xl font-bold'>Ready to Transform Your Workflow?</h2>
                    <p className='text-sm'>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>
                </div>
                {/* button */}
                <div className=' flex justify-center items-center gap-4'>
                    <button className='bg-white px-2 py-3 rounded-full hover: cursor-pointer'>
                        <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-semibold text-sm '>Explore Products</span>
                    </button>
                    <button className='bg-[#9514FA] px-2 py-3  border border-white rounded-full hover: cursor-pointer'>
                        <span className='text-white'>View Pricing</span>
                    </button>
                </div>
                {/* small text */}
                <div className='flex justify-center text-sm text-zinc-300 gap-2'>
                    <p>14-day free trial •</p>
                    <p> No credit card required • </p>
                    <p>Cancel anytime</p>
                </div>
            </div>
        </div>
    );
};

export default Transform;