import { useEffect } from "react";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../../assets/clients/client-1.png";
import image2 from "../../assets/clients/client-2.png";
import image3 from "../../assets/clients/client-3.png";
import image4 from "../../assets/clients/client-4.png";

const contents = [
  { img: image1 },
  { img: image2 },
  { img: image3 },
  { img: image4 },
];

const Clients = () => {
  // const splideRef = useRef();

  // const splideOptions = {
  //   type: "loop",
  //   perPage: 3,
  //   perMove: 1,
  //   pagination: true,
  //   arrows: true,
  //   autoplay: true,
  //   interval: 3000,
  //   focus: "center",
  //   gap: "2rem",
  //   breakpoints: {
  //     1024: {
  //       perPage: 3,
  //     },
  //     768: {
  //       perPage: 2,
  //       gap: "1.5rem",
  //     },
  //     480: {
  //       perPage: 1,
  //       gap: "1rem",
  //     },
  //   },
  // };

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .clients-container {
        position: relative;
        max-width: 100%;
        margin: 0 auto;
      }

      /* Static white circle background - always centered */
      .clients-container::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -60%);
        width: 140px;
        height: 140px;
        background-color: white;
        border-radius: 50%;
       
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        border: 2px solid rgba(255, 255, 255, 0.8);
        z-index: 0;
        pointer-events: none;
      }

      .splide__slide {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        transform: scale(0.8);
        opacity: 0.6;
        z-index: 1;
      }

      .splide__slide.is-active {
        transform: scale(1.2);
        filter: blur(0.2px);
        opacity: 1;
        z-index: 20;
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
        z-index: 11;
      }

      .client-logo img {
        z-index: 9999;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }

      /* Pagination Dots Styling */
      .splide__pagination {
        display: flex;
        justify-content: center;
        margin-top: 1.5rem;
        padding: 0;
        list-style: none;
      }

      .splide__pagination__page {
        width: 10px;
        height: 10px;
        background: #d1d5db;
        border-radius: 50%;
        margin: 0 8px; /* Increased gap between dots */
        transition: all 0.3s ease;
        cursor: pointer;
      }

      .splide__pagination__page.is-active {
        background: #ED1C24;
        transform: scale(1.4);
      }

      .splide__pagination__page:hover {
        background: #9ca3af;
      }

      /* Navigation Buttons Styling */
      .splide__arrow {
        background: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.3s ease, opacity 0.3s ease;
        opacity: 0.7;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 30;
      }

      .splide__arrow:hover {
        background: rgba(0, 0, 0, 0.7);
        opacity: 1;
      }

      .splide__arrow--prev {
        left: -60px;
      }

      .splide__arrow--next {
        right: -60px;
      }

      /* Ensure correct arrow icon orientation */
      .splide__arrow--prev svg {
        transform: rotate(180deg); /* Ensure no rotation for left arrow */
      }

      .splide__arrow--next svg {
        transform: rotate(0deg); /* Ensure no rotation for right arrow */
      }

      /* Responsive adjustments for buttons */
      @media (max-width: 1024px) {
        .splide__arrow--prev {
          left: -40px;
        }
        .splide__arrow--next {
          right: -40px;
        }
      }

      @media (max-width: 768px) {
        .splide__arrow--prev {
          left: -30px;
        }
        .splide__arrow--next {
          right: -30px;
        }
        .splide__arrow {
          width: 32px;
          height: 32px;
        }
        .splide__arrow svg {
          width: 16px;
          height: 16px;
        }
      }

      @media (max-width: 480px) {
        .splide__arrow--prev {
          left: -20px;
        }
        .splide__arrow--next {
          right: -20px;
        }
      }

      .splide__arrow svg {
        width: 20px;
        height: 20px;
        fill: #ffffff;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="py-20 max-w-5xl mx-auto mt-20">
      <h1 className="text-[#141313] text-[40px] text-center mb-10 font-normal">
        Our Customers
      </h1>
    <div className="flex justify-between">
        {contents.map((item, index) => (
        <div key={index}>
          <div className="flex justify-center items-center h-40">
            <div className="">
              <img
                src={item.img}
                alt={`client-${index}`}
                className={`${index==0? "w-30 h-30":"w-20 h-20"} object-contain`}
             />
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Clients;
