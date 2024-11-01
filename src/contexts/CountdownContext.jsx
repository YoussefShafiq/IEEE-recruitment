import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const CountdownContext = createContext();

// Define the start and end dates
const startDate = new Date('2024-10-01T00:00:00');
const endDate = new Date('2024-12-01T00:00:00');

// Helper function to calculate time left
const calculateTimeLeft = () => {
    const now = new Date();
    const differenceInMs = endDate - now;

    const days = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((differenceInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((differenceInMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((differenceInMs % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, differenceInMs };
};

// Countdown provider component
export const CountdownProvider = ({ children }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [active, setActive] = useState(new Date() >= startDate);
    const [coming, setComing] = useState(true);
    const [end, setEnd] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();

            if (now >= startDate) {
                setComing(false)
            }

            if (now >= startDate && now < endDate) {
                setEnd(false);
                setActive(true);
                const calculatedTimeLeft = calculateTimeLeft();
                setTimeLeft(calculatedTimeLeft);
                if (calculatedTimeLeft.differenceInMs <= 0) {
                    setEnd(true);
                    clearInterval(timer);
                }
            } else if (now <= startDate) {
                setActive(false);
                setComing(true)

            } else if (now >= endDate) {
                setEnd(true);
                clearInterval(timer);
                setActive(false);
            } else {
                setActive(false);
            }
        }, 1000);

        return () => clearInterval(timer); // Clear on component unmount
    }, []);

    return (
        <CountdownContext.Provider value={{ timeLeft, coming, end, active }}>
            {children}
        </CountdownContext.Provider>
    );
};

// Custom hook to use the countdown context
export const useCountdown = () => useContext(CountdownContext);
