import React from 'react';
import bannerImg from '../../assets/banner.png'
import { CiPlay1 } from 'react-icons/ci';
import badgeIcon from "../../assets/Rectangle.png"

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className="hero min-h-4/5">
                <div className="hero-content gap-10 lg:gap-80 flex-col lg:flex-row-reverse">
                    <img src={bannerImg} className="max-w-xs lg:max-w-sm rounded-lg shadow-2xl animate-pulse"
                    />
                    <div className='text-center lg:text-left space-y-5'>
                        <h5 className='badge px-3 py-5 rounded-full bg-[#E1E7FF]'>
                            <img src={badgeIcon} alt="" />
                            <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-semibold'>New: AI-Powered Tools Available</span></h5>
                        <h1 className="text-6xl font-extrabold text-[#101727]">Supercharge Your <br />Digital Workflow</h1>
                        <p className="py-6 text-[##627382]">
                            Access premium AI tools, design assets, templates, and productivity <br />
                            software—all in one place. Start creating faster today.
                            <br />
                            Explore Products
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center'>
                            <button className=" bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-6 py-3 rounded-full hover:cursor-pointer">Explore Products</button>
                            <button className='rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-0.5 hover:cursor-pointer'>
                                <span className='flex items-center gap-2 bg-white px-6 py-3 rounded-full '>
                                    <CiPlay1 className='text-[#4F39F6]' />
                                    <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-semibold'>
                                        Watch Demo
                                    </span>
                                </span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;