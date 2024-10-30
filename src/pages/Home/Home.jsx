import { Timer } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/primary logo.svg'
import { NavLink } from 'react-router-dom'
import timeoutImage from '../../assets/images/End of workday-bro.png'
import interviewimage from '../../assets/images/Interview-bro.png'

export default function Home() {

    const futureDate = new Date('2024-11-30T00:00:00'); // Replace with your future date

    const calculateTimeLeft = () => {
        const now = new Date();
        const differenceInMs = futureDate - now;

        const days = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
        const hours = Math.floor((differenceInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((differenceInMs % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((differenceInMs % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds, differenceInMs }; // Include the difference for later use
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [end, setEnd] = useState(false); // State to track if the countdown has ended

    useEffect(() => {
        const timer = setInterval(() => {
            const calculatedTimeLeft = calculateTimeLeft();
            setTimeLeft(calculatedTimeLeft);

            // Check if the countdown has ended
            if (calculatedTimeLeft.differenceInMs <= 0) {
                setEnd(true);
                clearInterval(timer); // Stop the timer if the date is in the past
            }
        }, 1000);

        return () => clearInterval(timer); // Clear the interval on component unmount
    }, []);

    return <>
        <div className="min-h-screen bg-pattern">
            <div className="container m-auto flex justify-center items-center lg:flex-row flex-col-reverse">
                <div className="w-full lg:w-1/2 p-5 ">
                    <div className='flex justify-center mb-3 ' >
                        <img src={logo} className='w-14' alt="IEEE - Helwan logo" />
                    </div>
                    <h1 className="font-uni-sans-heavy text-primary text-3xl text-center">
                        IEEE - Helwan Recruitment
                    </h1>
                    {end ? <>
                        <div className='pt-5' >
                            <h2 className='font-uni-sans-heavy' >Recruitment has ended!</h2>
                            <p>Thank you for your interest. Stay tuned for our next recruitment season!❤️</p>
                        </div>
                    </> : <div class="p-6 font-sans text-gray-800 ">
                        <p class="text-lg font-semibold mb-4">Hello!</p>

                        <p class="indent-5 text-justify py-1">
                            IEEE Helwan University is now recruiting new members! Join us to connect with like-minded peers, enhance your skills, and find your ideal field.
                        </p>

                        <p class="indent-5 text-justify py-1">
                            Whether you're looking to gain experience or join a supportive community, IEEE is here to guide you.
                        </p>

                        <p class="indent-5 text-justify py-1">
                            Don’t wait—click join below and secure your spot!
                        </p>

                        <h2 class="mt-6 text-lg font-semibold">Best wishes,</h2>
                        <h2 class="text-lg font-semibold">IEEE Team</h2>
                    </div>}
                    {end ? <>
                        <img src={timeoutImage} alt="" />
                    </> : <div className="flex justify-center items-center space-x-4">
                        <div className="w-1/4 border-2 border-primary bg-base-color shadow-lg rounded-lg aspect-square flex flex-col justify-center items-center p-2">
                            <div className='md:hidden'><Timer color='#207da9' size={30} /></div>
                            <div className='hidden md:block' ><Timer color='#207da9' size={55} /></div>
                            <h3 className='text-primary font-bold text-2xl md:text-4xl' >{timeLeft.days}</h3>
                            <p className='text-primary text-xs md:text-base' >DAYS</p>
                        </div>
                        <div className="w-1/4 border-2 border-primary bg-base-color shadow-lg rounded-lg aspect-square flex flex-col justify-center items-center p-2">
                            <div className='md:hidden'><Timer color='#207da9' size={30} /></div>
                            <div className='hidden md:block' ><Timer color='#207da9' size={55} /></div>
                            <h3 className='text-primary font-bold text-2xl md:text-4xl' >{timeLeft.hours}</h3>
                            <p className='text-primary text-xs md:text-base' >HOURS</p>
                        </div>
                        <div className="w-1/4 border-2 border-primary bg-base-color shadow-lg rounded-lg aspect-square flex flex-col justify-center items-center p-2">
                            <div className='md:hidden'><Timer color='#207da9' size={30} /></div>
                            <div className='hidden md:block' ><Timer color='#207da9' size={55} /></div>
                            <h3 className='text-primary font-bold text-2xl md:text-4xl' >{timeLeft.minutes}</h3>
                            <p className='text-primary text-xs md:text-base' >MINUTES</p>
                        </div>
                        <div className="w-1/4 border-2 border-primary bg-base-color shadow-lg rounded-lg aspect-square flex flex-col justify-center items-center p-2">
                            <div className='md:hidden'><Timer color='#207da9' size={30} /></div>
                            <div className='hidden md:block' ><Timer color='#207da9' size={55} /></div>
                            <h3 className='text-primary font-bold text-2xl md:text-4xl' >{timeLeft.seconds}</h3>
                            <p className='text-primary text-xs md:text-base' >SECONDS</p>
                        </div>
                    </div>}
                    <div className='my-5 flex justify-center text-center' >
                        <NavLink to={'form'} className='bg-primary hover:bg-secondary hover:shadow-lg transition-colors box-border rounded text-white w-full p-3'>JOIN US</NavLink>
                    </div>
                </div>
                <div className="md:w-1/2 hidden md:block lg:flex justify-center items-center">
                    <div className="w-2/3">
                        <img src={interviewimage} className='w-full' alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
}
