import React, { useEffect, useState } from 'react'
import FacilitiesHero from '../components/Facilities/FacilitiesHero'
import FacilitiesBentoGrid from '../components/Facilities/FacilitiesBento'
import { useLocation } from 'react-router-dom';

const Facilities = () => {

    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();
    const [activeTab, setActiveTab] = useState("Facilities");
    // Function to check if the link is active
    const isActive = (path) => {
        return location.pathname === path;
    };

    useEffect(() => {
        // Trigger animation after component mount
        setIsVisible(true);
    }, []);
    const tabs = [
        "Facilities",
        "Precision Engineering",
        "Cutting-Edge Testing",
        "Sustainable Manufacturing",
    ];

    return (
        <div>
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
