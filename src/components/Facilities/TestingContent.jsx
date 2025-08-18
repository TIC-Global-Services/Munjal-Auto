// Component for the "Cutting-Edge Testing" tab
const TestingContent = ({ content }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 mb-20">

            <h1 className="text-[#151414] text-[28px] leading-[57px] text-center max-w-4xl mx-auto mt-20">
                Our state-of-the-art manufacturing facilities are equipped with advanced
                machinery and automated processes, ensuring high-precision components
                that meet global standards.
            </h1>

            <div className="flex flex-row justify-between items-start max-w-8xl mt-[120px]">
                <h1 className="text-[36px] font-medium">Fuel Tank <br /> Manufactuirng</h1>

                <div className="flex flex-col justify-center items-start space-y-5">
                    <div>
                        <h1 className="text-[#ED1C24] text-[26px] font-semibold mb-2">
                            Stamping
                        </h1>
                        <div className="w-full text-left">
                            <ul className="list-disc pl-5 space-y-4 columns-1 gap-x-8  text-[#626367]">
                                <li>
                                    Presses ranging from 200 – 1000 TON With Large bed sizes
                                </li>
                                <li>
                                    Bed Size from 850 mm X 1450 mm to 2350 mmX 3250 mm Shut Height
                                    550 mm to 1050 mm
                                </li>
                                <li>Supported By Following Hardware (Work Stations)</li>
                                <li>HP Z-600</li>
                                <li>HP Z-400 </li>
                                <li>Plotter HP-500</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-[#ED1C24] text-[26px] font-semibold mb-2">
                            Tool Design Center ( Waghodia)
                        </h1>
                        <div className="w-80 text-left">
                            <ul className="list-disc pl-5 space-y-4 columns-1 gap-x-8  text-[#626367]">
                                <li>
                                    CATIA V-5 –R-60
                                </li>
                                <li>
                                    Pro-E Wildfire
                                </li>
                                <li>Hyper Form ( Blank & Nest)</li>
                                <li>AutoCAD</li>
                                <li>Supported by Following Hardware (Work Stations)</li>
                                <li>HP XW-4600</li>
                                <li>IBM-Intelli-Star Z-Pro</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestingContent
