import React from 'react'
import image1 from '../../assets/certifications/certificate1.jpg';
import image2 from '../../assets/certifications/certificate2.png';
import image3 from '../../assets/certifications/certification3.png';
import image4 from '../../assets/certifications/certificate4.png';
import image5 from '../../assets/certifications/certificate5.png';
import { Link } from 'react-router-dom';

const Certifications = () => {
  const contents = [
    {
      image: image1,
      name: "ISO 14001",
      width: 120,
      height: 130,
    },
    {
      image: image2,
      name: "ISO 16949",
      width: 90,
      height: 110,
    },
    {
      image: image3,
      name: "ISO 9001",
      width: 110,
      height: 100,
    },
    {
      image: image4,
      name: "ARAI",
      width: 110,
      height: 100,
    },
    {
      image: image5,
      name: "2012  Certification of OHSAS 18001-2007",
      width: 110,
      height: 100,
    },
  ];

  return (
    <div className="flex flex-col space-y-10 justify-center items-center px-4 sm:px-6 md:px-10 py-10">
      
      <h1 className="text-[#ED1C24] text-[40px] sm:text-[50px] md:text-[60px] lg:text-[65px] leading-tight text-center font-semibold tracking-tight">
        Our Certifications
      </h1>


      <div className="grid lg:grid-cols-5 grid-cols-1">
        {contents.map((content, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-start w-[200px] sm:w-[220px] md:w-[250px]"
          >
            <div
              style={{
                width: `${content.width}px`,
                height: `${content.height}px`,
              }}
              className="flex items-center justify-center"
            >
              <img
                src={content.image}
                alt={content.name}
                className="object-contain w-full h-full"
              />
            </div>
            <p className="text-center mt-2 text-sm sm:text-base">{content.name}</p>
          </div>
        ))}
      </div>

      {/* <Link
        to="/quality#quality-certification"
        className="flex items-center justify-center w-[180px] sm:w-[200px] h-[42px] sm:h-[46px] bg-black text-white rounded-full text-[14px] sm:text-[16px] font-medium hover:bg-gray-900 transition duration-300"
      >
        View More
      </Link> */}
    </div>
  );
};

export default Certifications;
