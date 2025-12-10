import PropTypes from 'prop-types';
import faBento2 from "../../assets/Facilities/Rectangle 34625219.png";
import faBento3 from "../../assets/faBento3.png";
import faBento1 from "../../assets/Facilities/img.png";
import FacilitiesContent from "./FacilitiesContent";
import PrecisionEngineeringContent from "./PrecisionEngineeringContent";
import TestingContent from "./TestingContent";
import SustainableContent from "./SustainableContent";



const FacilitiesBentoGrid = ({ activeTab, setActiveTab, tabs }) => {

   

    // Content for each tab
    const tabContent = {
        "Manufacturing Line": {
            title: "Driving Excellence Forward",
            description:
                "With decades of expertise, we push the boundaries of precision engineering to deliver superior automotive solutions. Our commitment to quality and innovation fuels our journey toward excellence.",
            mainImage: faBento1,
            cards: [
                {
                    title: "World-Class Manufacturing",
                    description:
                        "From sheet metal components to complete assemblies, our manufacturing plants leverage cutting-edge technology to produce high-performance auto components. With a focus on sustainability and innovation, we ensure reliability at every stage of production.",
                    image: faBento2,
                },
                {
                    title: "Innovative Facilities for Superior Performance",
                    description:
                        "Lorem ipsum dolor sit amet consectetur. Felis nisl lectus at ornare morbi egestas scelerisque lectus. Id non est magna risus libero tellus mi.",
                    image: faBento3,
                },
            ],
        },
        "Special Processes": {
            title: "Precision at Every Step",
            description:
                "Our engineering facilities utilize cutting-edge technology to ensure precision in every component we manufacture.",
            mainImage: faBento2,
            layout: "split-grid",
        },
        "Tooling & Engineering": {
            title: "Driving Excellence Forwar",
            description:
                "With decades of expertise, we push the boundaries of precision engineering to deliver superior automotive solutions. Our commitment to quality and innovation fuels our journey toward excellence",
            mainImage: faBento3,
            layout: "showcase",
        },
        "R&D and Prototyping": {
            title: "Eco-Friendly Production",
            description:
                "Our sustainable manufacturing facilities minimize environmental impact while maximizing efficiency.",
            mainImage: faBento1,
            layout: "timeline",
        },
    };

    // Render the appropriate component based on the active tab
    const renderTabContent = () => {
        switch (activeTab) {
            case "Manufacturing Line":
                 return <TestingContent content={tabContent[activeTab]} />;   
            case "Special Processes":
                return <PrecisionEngineeringContent content={tabContent[activeTab]} />;
            case "Tooling & Engineering":
               return <FacilitiesContent content={tabContent[activeTab]} />;
            case "R&D and Prototyping":
                return <SustainableContent content={tabContent[activeTab]} />;
            default:
                return <FacilitiesContent content={tabContent["Manufacturing Line"]} />;
        }
    };

    return (
        <>
            {/* Tab Navigation */}
            <div className="flex justify-center mt-12 mb-8 px-4">
                <div className="flex space-x-4 md:space-x-8 scrollbar-hide pb-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-3 rounded-full text-xs whitespace-nowrap md:text-sm lg:text-base transition-all ${activeTab === tab
                                ? "bg-[#E31E24] text-white font-medium"
                                : "bg-white text-black border border-gray-200 hover:bg-gray-100"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Render the appropriate content based on active tab */}
            {renderTabContent()}
        </>
    );
};

FacilitiesBentoGrid.propTypes = {
    activeTab: PropTypes.string.isRequired,
    setActiveTab: PropTypes.func.isRequired,
    tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FacilitiesBentoGrid;