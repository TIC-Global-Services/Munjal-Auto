import React, { useEffect, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import image1 from '../assets/clients/hero.png';
import image2 from '../assets/clients/piaggio.png';
import image3 from '../assets/clients/suzuki.png';
import image4 from '../assets/clients/tata.png';

const contents = [
  { img: image1 },
  { img: image2 },
  { img: image3 },
  { img: image4 },
];

const Clients = () => {
  const splideRef = useRef();

  const splideOptions = {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    pagination: false,
    arrows: false,
    autoplay: true,
    interval: 3000,
    focus: 'center',
    gap: '2rem',
    breakpoints: {
      1024: {
        perPage: 3,
      },
      768: {
        perPage: 2,
      },
      480: {
        perPage: 1,
      },
    },
  };

  useEffect(() => {
    const style = document.createElement('style');
        style.textContent = `
        .clients-container {
    position: relative;
    }

    /* Static white circle background - always centered */
    .clients-container::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 140px;
    height: 140px;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    border: 2px solid rgba(255, 255, 255, 0.8);
    z-index: 0; /* Increased from 1 to 10 */
    pointer-events: none;
    }

    .splide__slide {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(0.8);
    
    opacity: 0.6;
    z-index: 1; /* Lower z-index for inactive slides */
    }

    .splide__slide.is-active {
    transform: scale(1.2);
    filter: blur(0.2px);
    opacity: 1;
    z-index: 20; /* Higher than white circle's z-index */
    }

    .client-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    z-index:11;
    /* Highest z-index in the stack */
    }

    .client-logo img {
    z-index:9999;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
        `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="py-20 max-w-3xl mx-auto mt-20">
        <h1 className='text-[#141313] text-[40px] text-center mb-10 font-normal'>Our Customers</h1>
      <div className="clients-container">
        <Splide ref={splideRef} options={splideOptions}>
          {contents.map((item, index) => (
            <SplideSlide key={index}>
              <div className="flex justify-center items-center h-40">
                <div className="client-logo">
                  <img
                    src={item.img}
                    alt={`client-${index}`}
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Clients;