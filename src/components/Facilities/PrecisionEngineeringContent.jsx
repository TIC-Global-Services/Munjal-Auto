import rdImage from "../../assets/rdImage.png";
import faControl from "../../assets/faControl.png";
import { Link } from "react-router-dom";

const PrecisionEngineeringContent = ({ content }) => {
  return (
    <div className="md:max-w-7xl mx-auto px-4 mb-20">
      {/* Split Grid Layout */}
      <div>
        <h1
          className="  text-[#151414] text-[28px] leading-[57px] text-center max-w-4xl mx-auto mt-20"
          style={{
            letterSpacing: "2%",
            textAlign: "center",
          }}
        >
          Through intelligent design and high-performance machinery, we achieve unmatched precision, delivering components that meet the most stringent global standards.
        </h1>
      </div>
      <div className=" flex  md:flex-row flex-col my-28 gap-10">
        <img
          src={faControl}
          className=" rounded-xl object-cover md:w-[45%]"
          alt=""
        />
        <div className=" rounded-xl bg-gray-50 flex flex-col items-start justify-around  md:w-1/2  px-10 py-6 ">
          <div className=" flex  flex-col  ">
            <h1 className="  mb-4 -mt-4 ml-4 text-2xl">
              Central Room & Technical Room
            </h1>
            <ul className="text-[#82848A] leading-8 list-disc pl-5">
              <li>
                Spread in 1600 square meters area and operational since April
                2011. A world class facility for design & manufacturing of small
                to large sized tools, fixtures & gauges required in our various
                manufacturing locations to manufacture large parts & assemblies
                of automobiles
              </li>
              <li>
                Latest CAD / CAM & CAE software's –Unigraphics, Catia V-5, FTI,
                and hyperform are installed in tool design section. Total number
                of design station -40.
              </li>
            </ul>
          </div>
          <Link to='/contact' className=" ml-4 border rounded-xl  border-black  px-6 py-2">
            Contact Us
          </Link>
        </div>
      </div>

      <div className="flex flex-row justify-between items-start max-w-3xl">
        <h1 className="text-[36px] font-medium">Tool Desgin</h1>

        <div className="flex flex-col justify-center items-start space-y-5">
          <h1 className="text-[#ED1C24] text-[26px] font-semibold">
            Bawal Haryana
          </h1>
          <div className="w-80 text-left">
            <ul className="list-disc pl-5 space-y-4 columns-2 gap-x-8  text-[#626367]">
              <li>Unigraphics NX</li>
              <li>Pampstamp</li>
              <li>FTI - Fast blank</li>
              <li>FTI - Blank Nest</li>
              <li>Hyper form</li>
              <li>Auto Cad</li>
            </ul>
          </div>
        </div>
      </div>

      {/* R&D Centre Section */}
      <div className="flex gap-10 my-28">
        <div className="w-full rounded-3xl relative overflow-hidden">
          <img
            src={rdImage}
            alt="R&D Centre"
            className="lg:w-full h-[30rem] lg:h-full lg:object-cover object-fill  "
          />
          <div
            className="absolute left-6 right-6 lg:left-6 rounded-[28px]  lg:px-10  lg:w-1/3  py-6 px-6 lg:py-10 bottom-6 flex flex-col justify-center text-white"
            style={{
              border: "1px solid rgba(15, 15, 15, 0.1)",
              backdropFilter: "blur(14.4px)",
              background: "rgba(15, 15, 15, 0.22)",
            }}
          >
            <h2 className="  text-base lg:text-3xl font-bold mb-4">
              R&D Centre
            </h2>
            <p className="  text-xs lg:text-lg font-normal leading-relaxed">
              The excellence reflected in the output of the product is the
              result of our inherent expertise in making the blueprint. The
              systematic and precise stroke in designing lays a strong
              foundation in manufacturing a product.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrecisionEngineeringContent;