import React from 'react';
import accImg from '../../assets/user.png'
import productImg from '../../assets/package.png'
import learningImg from '../../assets/rocket.png'

const Step = () => {
    return (
        <div className='py-20 m-4  bg-[#F9FAFC]'>
            <div className='container mx-auto space-y-8'>
                {/* step */}
                <div className='text-center space-y-3'>
                    <h1 className='text-[#101727] text-3xl lg:text-5xl'>Get Started in 3 Steps</h1>
                    <p className='text-[#627382] text-lg'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                {/* card section */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center'>
                    {/* card 1 */}
                    <div className='max-w-sm mx-auto px-3 py-8 space-y-4 shadow-2xl rounded-2xl'>
                        <div className='flex justify-end'>
                            <span className='p-2 border border-purple-600  rounded-full text-xs bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>01</span>
                        </div>
                        <div className='space-y-6'>
                            <div className='flex justify-center'>
                                <img className='p-2 border  border-purple-600 w-16 bg-[#E1E7FF] rounded-2xl' src={accImg} alt="" />
                            </div>
                            <h3 className='text-center text-[#101727] font-bold text-2xl'>Create Account</h3>
                            <p className='text-center text-[#627382] font-semibold'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>
                    {/* card 2*/}
                    <div className='max-w-sm mx-auto px-3 py-8 space-y-4 shadow-2xl rounded-2xl'>
                        <div className='flex justify-end'>
                            <span className='p-2 border border-purple-600 rounded-full text-xs bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>02</span>
                        </div>
                        <div className='space-y-6'>
                            <div className='flex justify-center'>
                                <img className='p-2 border  border-purple-600 w-16 bg-[#E1E7FF] rounded-2xl' src={productImg} alt="" />
                            </div>
                            <h3 className='text-center text-[#101727] font-bold text-2xl'>Choose Products</h3>
                            <p className='text-center text-[#627382] font-semibold'>Browse our catalog and select the tools that fit your needs. </p>
                        </div>
                    </div>
                    {/* card 3*/}
                    <div className='max-w-sm mx-auto px-3 py-8 space-y-4 shadow-2xl rounded-2xl'>
                        <div className='flex justify-end'>
                            <span className='p-2 border border-purple-600 rounded-full text-xs bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>03</span>
                        </div>
                        <div className='space-y-6'>
                            <div className='flex justify-center'>
                                <img className='p-3 border  border-purple-600 w-16 bg-[#E1E7FF] rounded-2xl ' src={learningImg} alt="" />
                            </div>
                            <h3 className='text-center text-[#101727] font-bold text-2xl'>Start Creating</h3>
                            <p className='text-center text-[#627382] font-semibold'>Download and start using your premium tools immediately.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step;