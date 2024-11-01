import { Timer } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/white logo.svg'
import { NavLink } from 'react-router-dom'
import timeoutImage from '../../assets/images/End of workday-bro.png'
import interviewimage from '../../assets/images/Interview-bro.png'
import { useCountdown } from '../../contexts/CountdownContext'

export default function Home() {

    const { timeLeft, end, coming, active } = useCountdown();

    return <>
        <div className="bg-pattern bg-fixed min-h-screen">
            <div className="min-h-screen  box-border">
                <div className="container min-h-screen m-auto flex items-center justify-center py-8">
                    <div className='p-5 w-11/12 bg-patternprimary bg-primary overflow-y-scroll rounded-xl shadow-2xl flex flex-col justify-center items-center space-y-5' style={{ scrollbarWidth: 'none' }}>
                        <div>
                            <div className='flex justify-center mb-3 ' >
                                <img src={logo} className='w-14' alt="IEEE - Helwan logo" />
                            </div>
                            <h1 className="font-uni-sans-heavy text-white text-3xl text-center">
                                IEEE - Helwan Recruitment
                            </h1>
                        </div>
                        {end ? <>
                            <div class="p-6 font-sans text-white drop-shadow-md ">
                                <p class="text-lg font-semibold mb-4">Hello!</p>

                                <p class="text-justify py-1">
                                    IEEE Helwan University is now recruiting new members! Join us to connect with like-minded peers, enhance your skills, and find your ideal field.
                                </p>

                                <p class="text-justify py-1">
                                    Whether you're looking to gain experience or join a supportive community, IEEE is here to guide you.
                                </p>

                                <p class="text-justify py-1">
                                    Don’t wait—click join below and secure your spot!
                                </p>

                                <h2 class="mt-6 text-lg font-semibold">Best wishes,</h2>
                                <h2 class="text-lg font-semibold">IEEE Team</h2>
                            </div>
                        </> : <div class="p-6 font-sans text-white drop-shadow-md ">
                            <p class="text-lg font-semibold mb-4">Hello!</p>

                            <p class="text-justify py-1">
                                IEEE Helwan University is now recruiting new members! Join us to connect with like-minded peers, enhance your skills, and find your ideal field.
                            </p>

                            <p class="text-justify py-1">
                                Whether you're looking to gain experience or join a supportive community, IEEE is here to guide you.
                            </p>

                            <p class="text-justify py-1">
                                Don’t wait—click join below and secure your spot!
                            </p>

                            <h2 class="mt-6 text-lg font-semibold">Best wishes,</h2>
                            <h2 class="text-lg font-semibold">IEEE Team</h2>
                        </div>}
                        <div>
                            {coming ? <>
                                <h1 className="font-uni-sans-heavy text-white text-3xl text-center">
                                    SOON
                                </h1>
                            </> : <>
                                {end ? <>
                                    <div className="font-uni-sans-heavy text-white text-2xl text-center">
                                        <h2 className='font-uni-sans-heavy' >Recruitment has ended!</h2>
                                        <p>Thank you for your interest. Stay tuned for our next recruitment season!❤️</p>
                                    </div>
                                </> : <div className="flex justify-center items-center space-x-4">
                                    <div className="w-1/4 border-2 shadow-lg rounded-lg flex flex-col justify-center items-center p-2">

                                        <h3 className='text-white font-bold text-2xl md:text-4xl' >{timeLeft.days}</h3>
                                        <p className='text-white text-xs md:text-base' >DAYS</p>
                                    </div>
                                    <div className="w-1/4 border-2 shadow-lg rounded-lg flex flex-col justify-center items-center p-2">

                                        <h3 className='text-white font-bold text-2xl md:text-4xl' >{timeLeft.hours}</h3>
                                        <p className='text-white text-xs md:text-base' >HOURS</p>
                                    </div>
                                    <div className="w-1/4 border-2 shadow-lg rounded-lg flex flex-col justify-center items-center p-2">

                                        <h3 className='text-white font-bold text-2xl md:text-4xl' >{timeLeft.minutes}</h3>
                                        <p className='text-white text-xs md:text-base' >MINUTES</p>
                                    </div>
                                    <div className="w-1/4 border-2 shadow-lg rounded-lg flex flex-col justify-center items-center p-2">

                                        <h3 className='text-white font-bold text-2xl md:text-4xl' >{timeLeft.seconds}</h3>
                                        <p className='text-white text-xs md:text-base' >SECONDS</p>
                                    </div>
                                </div>}
                            </>}
                        </div>
                        {active ? <>
                            <div className='my-5 flex justify-center text-center' >
                                <NavLink to={'form'} className='bg-secondary hover:bg-base-color hover:text-secondary hover:shadow-lg transition-all box-border rounded-lg hover:scale-[1.02] text-white w-full p-3'>JOIN US</NavLink>
                            </div>
                        </> : <></>}
                    </div>
                </div>
            </div>
        </div>
    </>


}
