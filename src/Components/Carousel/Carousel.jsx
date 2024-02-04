import React, { useEffect, useState } from 'react';
import cardback from '../../Images/cardback.jpg';
import loan from '../../Images/loan.jpg';
import marketing from '../../Images/marketing-bank.png';
import trip from '../../Images/trip.jpg';
import visa from '../../Images/visa0.png';
import campaña from '../../Images/campaña.jpg';

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const slides = [
  { url: cardback },
  { url: loan },
  { url: marketing },
  { url: trip },
  { url: visa },
  { url: campaña }
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextOne = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const beforeOne = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(()=>{
    const auto = setInterval(()=>{
      nextOne()
    },3000);
  
  return () => clearInterval(auto);
}, [current]);
  return (
    <>
      <div className='max-w-[1400px] h-[600px] w-full m-auto py-16 px-4 relative '>
        <div
          style={{ backgroundImage: `url(${slides[current].url})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        ></div>
        <div
          onClick={nextOne}
          className='absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer'
        >
          <BsChevronCompactLeft size={30} />
        </div>
        <div
          onClick={beforeOne}
          className='absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer'
        >
          <BsChevronCompactRight size={30} />
        </div>
      </div>
    </>
  );
};

export default Carousel;
