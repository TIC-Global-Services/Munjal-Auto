import cer1 from "../../assets/cer1.jpeg"
import cer2 from "../../assets/cer2.jpeg"
import cer3 from "../../assets/cer3.jpeg"

const Certification = () => {
    return (
        <div id="quality-certification" className=" max-w-6xl mx-auto my-20 pb-20">
            <h1 className=" text-2xl md:text-4xl font-medium text-[#ED1C24] text-center mb-10">Our Certification</h1>
            <div className="md:block hidden">
                <div className="flex flex-col md:flex-row items-start justify-center w-full mx-auto gap-8 md:gap-4">
                    <div className="flex flex-col items-start w-full md:w-auto">
                        <img src={cer1} className="rounded-lg w-[80%] md:w-full max-w-[300px]" alt="" />
                        <div className="text-start mt-2">
                            <h1 className="text-[#ED1C24] text-2xl">2012</h1>
                            <h2 className="mt-1">Certification of OHSAS 18001-2007</h2>
                        </div>
                    </div>

                    <div className="flex flex-col items-start w-full md:w-auto">
                        <img src={cer2} className="rounded-lg w-[80%] md:w-full max-w-[300px]" alt="" />
                        <div className="text-start mt-2">
                            <h1 className="text-[#ED1C24] text-2xl">2012</h1>
                            <h2 className="mt-1">Certification of OHSAS 18001-2007</h2>
                        </div>
                    </div>

                    <div className="flex flex-col items-start w-full md:w-auto">
                        <img src={cer3} className="rounded-lg w-[80%] md:w-full max-w-[300px] md:ml-0" alt="" />
                        <div className="text-start mt-2">
                            <h1 className="text-[#ED1C24] text-2xl">2012</h1>
                            <h2 className="mt-1">Certification of OHSAS 18001-2007</h2>
                        </div>
                    </div>
                </div>
            </div>


            <div className="  ml-7 md:hidden flex flex-col w-full mx-auto ">

                <div>
                    <img src={cer2} className=" rounded-lg  w-[70%]" alt="" />
                    <div>
                        <h1 className=" text-[#ED1C24] mt-2 text-2xl">2012</h1>
                        <h2 className=" mt-1">Certification of OHSAS 18001-2007</h2>
                    </div>
                </div>
                <div className="   mx-auto items-center justify-center w-full flex">

                    <div>
                        <img src={cer3} className=" rounded-lg  w-[70%] " alt="" />
                        <div>
                            <h1 className=" text-[#ED1C24] mt-2 text-2xl">2012</h1>
                            <h2 className=" mt-1">Certification of OHSAS 18001-2007</h2>
                        </div>
                    </div>
                    <div>
                        <img src={cer1} className=" rounded-lg w-[70%] " alt="" />
                        <div>
                            <h1 className=" text-[#ED1C24] mt-2 text-2xl">2012</h1>
                            <h2 className=" mt-1">Certification of OHSAS 18001-2007</h2>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Certification;