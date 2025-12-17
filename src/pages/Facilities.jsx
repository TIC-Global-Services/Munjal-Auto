import React, { useEffect, useState } from 'react'
import FacilitiesHero from '../components/Facilities/FacilitiesHero'
import FacilitiesBentoGrid from '../components/Facilities/FacilitiesBento'
import { useLocation } from 'react-router-dom';

const Facilities = () => {

    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();
    const [activeTab, setActiveTab] = useState("Manufacturing Line");
    // Function to check if the link is active
    const isActive = (path) => {
        return location.pathname === path;
    };

    useEffect(() => {
        // Trigger animation after component mount
        setIsVisible(true);
    }, []);
    const tabs = [
        "Manufacturing Line",
        "Special Processes",
        "Tooling & Engineering",
        "R&D and Prototyping",
    ];

    return (
        <div className='bg-[#fbfbfc]'>
            <FacilitiesHero />
            <FacilitiesBentoGrid
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                tabs={tabs}
            />
        </div>
    )
}

export default Facilities
