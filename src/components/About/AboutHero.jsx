import React, { useEffect,  } from 'react'
import { Link,  } from 'react-router-dom';
import img from "../../assets/aboutusbanner.png";
import logo from "../../assets/companyLogo.png";
import icon1 from "../../assets/hero/icon.png";
import icon2 from "../../assets/hero/icon2.png";
import TimeLine from './TimeLine';





const AboutHero = () => {

    useEffect(() => {
        const hash = window.location.hash;

        if (hash) {
            const scrollToHash = () => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    clearInterval(interval);
                }
            };

            const interval = setInterval(scrollToHash, 100); // Try every 100ms

            // Stop trying after 5 seconds (failsafe)
            setTimeout(() => clearInterval(interval), 5000);
        }
    }, []);

    useEffect(() => {
        // Trigger animation after component mount
        setIsVisible(true);
    }, []);

    return (
        <div id="history" className="h-screen w-full overflow-hidden   flex flex-col items-center justify-center relative">
            {/* Background Image with Logo */}
            <div
                
                className="h-[90%] w-[94%] flex flex-col items-center justify-center rounded-[24px] relative"
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Logo */}
                <Link to="/">
                    <img
                        src={logo}
                        alt="Logo"
                        className="absolute -top-[0.9px] w-[60%] md:w-1/3 left-1/2 transform -translate-x-1/2"
                    />
                </Link>

                <div className="absolute bottom-5 right-5 flex flex-col items-center space-y-5 z-[999]">
                    <Link to="/contact">
                        <img
                            src={icon1}
                            alt="contact"
                            className="w-[30px] md:w-[40px] cursor-pointer hover:scale-125"
                        />
                    </Link>

                    <Link to="/contact">
                        <img
                            src={icon2}
                            alt="contact"
                            className="w-[55px] cursor-pointer hover:scale-125"
                        />
                    </Link>
                </div>


                <TimeLine />
            </div>
        </div>
    )
}

export default AboutHero
