import React from 'react';

const Pricing = () => {
    return (
        <div className='py-20'>
            {/* pricing div */}
            <div className='container mx-auto space-y-8'>
                {/* pricing */}
                <div className='text-center space-y-3'>
                    <h2 className='text-[#101727] p-1 lg:p-0 text-2xl lg:text-5xl '>Simple, Transparent Pricing</h2>
                    <p className='text-[#627382]  p-1 lg:p-0 text-sm lg:text-lg'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>
                {/* card section */}
                <div className='grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-8 justify-between items-center'>
                    {/* card 1 */}
                    <div>
                        <div className="card max-w-sm mx-auto bg-base-200 shadow-2xl rounded-2xl px-3 py-8 space-y-4">
                            <div className="card-body">
                                <div className='space-y-1'>
                                    <h2 className="text-3xl font-bold">Starter</h2>
                                    <p className='text-[#627382]'>Perfect for getting started</p>
                                </div>
                                <div>
                                    <span className="text-3xl font-extrabold">$0</span>
                                    <span className='text-[#627382] text-xl'>/month</span>
                                </div>
                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='text-[#627382] text-sm'>Access to 10 free tools</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='text-[#627382] text-sm'>Basic templates</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='text-[#627382] text-sm'>Community support</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='text-[#627382] text-sm'>1 project per month</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='text-[#627382] text-sm'>500MB Cloud Storage</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='text-[#627382] text-sm'>Mobile & Desktop Access</span>
                                    </li>
                                </ul>
                                <div className="mt-6">
                                    <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-2xl btn-block">Get Started Free</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div>
                       <div className="card max-w-sm mx-auto bg-linear-to-r from-[#4F39F6] to-[#9514FA]  shadow-2xl rounded-2xl px-3 py-8 space-y-4">
                            <div className="card-body relative">
                                <div className='absolute -top-10 left-1/3'>
                                     <span className="badge badge-lg bg-[#FEF3C6] text-[#BB4D00]">Most Popular</span>
                                </div>
                                <div className='space-y-1'>
                                    <h2 className="text-3xl font-bold text-white">Pro</h2>
                                    <p className='text-white '>Best for professionals</p>
                                </div>
                                <div>
                                    <span className="text-3xl font-extrabold text-white">$29</span>
                                    <span className='text-white text-xl'>/month</span>
                                </div>
                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='text-white text-sm'>Access to all premium tools</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='text-white text-sm'>Unlimited templates</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='text-white text-sm'>Priority support</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='text-white text-sm'>Unlimited projects</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='text-white text-sm'>Cloud sync</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='text-white text-sm'>Advanced analytics</span>
                                    </li>
                                </ul>
                                <div className="mt-6">
                                    <button className="btn bg-white text-[#4F39F6] rounded-2xl btn-block">Start Pro Trial</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div>
                          <div className="card max-w-sm mx-auto bg-base-200 shadow-2xl rounded-2xl px-3 py-8 space-y-4">
                            <div className="card-body">
                                <div className='space-y-1'>
                                    <h2 className="text-3xl font-bold">Enterprise</h2>
                                    <p className='text-[#627382]'>For teams and businesses</p>
                                </div>
                                <div>
                                    <span className="text-3xl font-extrabold">$99</span>
                                    <span className='text-[#627382] text-xl'>/month</span>
                                </div>
                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='text-[#627382] text-sm'>Everything in Pro</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='text-[#627382] text-sm'>Team collaboration</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='text-[#627382] text-sm'>Custom integrations</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='text-[#627382] text-sm'>Dedicated support</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='text-[#627382] text-sm'>SLA guarantee</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='text-[#627382] text-sm'>Custom branding</span>
                                    </li>
                                </ul>
                                <div className="mt-6">
                                    <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-2xl btn-block">Contact Sales</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;