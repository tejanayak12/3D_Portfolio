import React from 'react';
import { counterItems } from '../constants';
import CountUp from 'react-countup';

const AnimatedCounter = () => {
    return (
        <div id='counter' className='padding-x-lg xl:mt-0 mt-32'>
            <div className='mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
                {counterItems.map((item, index) => (
                    <div
                        key={index}
                        className='bg-zinc-900 rounded-lg p-10 flex flex-col justify-center items-center'
                    >
                        <div className='text-white text-5xl font-bold mb-2'>
                            <CountUp suffix={item.suffix} end={item.value} />
                        </div>
                        <div className='text-white text-lg text-center'>
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimatedCounter;
