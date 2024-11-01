import { Timer } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/white logo.svg'
import { NavLink } from 'react-router-dom'
import timeoutImage from '../../assets/images/End of workday-bro.png'
import soonimg from '../../assets/images/Writing room-pana.png'
import interviewimage from '../../assets/images/Interview-bro.png'
import { useCountdown } from '../../contexts/CountdownContext'
import { ThreeDots } from 'react-loader-spinner'

export default function Home() {

    const { timeLeft, end, coming, active } = useCountdown();
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        // Set a timeout to switch off loading after 2 seconds
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1100);

        // Cleanup the timer on component unmount
        return () => clearTimeout(timer);
    }, []);

    return <>
        <div className="bg-pattern bg-fixed ">

            <div className="container m-auto flex items-center justify-center">
                <div className='p-5 w-11/12 bg-patternprimary bg-primary overflow-y-scroll rounded-xl shadow-2xl flex flex-col justify-center items-center space-y-5' style={{ scrollbarWidth: 'none' }}>
                    <div>
                        <div className='flex justify-center mb-3 ' >
                            <img src={logo} className='w-14' alt="IEEE - Helwan logo" />
                        </div>
                        <h1 className="font-uni-sans-heavy text-white text-3xl text-center">
                            IEEE - Helwan Recruitment
                        </h1>
                    </div>



                    {!loading ? <> {active ? <>
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
                    </> : <>
                        {coming ? <>
                            <div class="p-6 font-sans text-white drop-shadow-md w-full lg:w-1/4 ">
                                <img src={soonimg} alt="" />
                            </div>
                        </> : <>
                            <div class="p-6 font-sans text-white drop-shadow-md w-full lg:w-1/4 ">
                                <img src={timeoutImage} alt="" />
                            </div>
                        </>}
                    </>}


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
                        </> : <></>}</> : <>
                        <ThreeDots
                            visible={true}
                            height="20"
                            width="43"
                            color="white"
                            radius="9"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClass="w-fit m-auto"
                        />
                    </>}


                </div>
            </div>
        </div>
    </>


}
