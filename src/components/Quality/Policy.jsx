import image1 from "../../assets/quality/1.png";
import image2 from "../../assets/quality/2.png";
import image3 from "../../assets/quality/3.png";
import image4 from "../../assets/quality/4.png";
import ModelViewer from "./ModelViewer";

const Policy = () => {
  const contents = [
    { image: image1, description: "Delivering precision-engineered, high-quality products." },
    { image: image2, description: "Implementing Lean, TPM, Poka-Yoke, Kaizen, and 5S." },
    { image: image3, description: "Reducing waste, optimizing resources, preventing defects." },
    { image: image4, description: "Meeting all regulatory and environmental standards." },
  ];

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:block w-full px-4 lg:px-8 xl:px-16">
        <div
          className="
            relative w-full  mx-auto
            bg-[#F5F5F5] rounded-2xl
            px-12 lg:px-16
            h-[600px] 
            flex items-start pt-10
          "
        >
          {/* White decorative card */}
          <div
            className="
              absolute -bottom-8 -left-2
              w-[40%]
              h-[clamp(200px,30vw,320px)]
              bg-white rounded-2xl
            "
          />

          {/* Decorative curves */}
          <div className="absolute top-[48%]  left-0 w-6 h-6 rounded-full shadow-[-10px_10px_0_#fff] z-0" />
          <div className="absolute bottom-0 left-[39.2%] w-6 h-6 rounded-full shadow-[-10px_10px_0_#fff] z-0" />

          {/* 3D MODEL */}
          <div
            className="
              absolute -bottom-6 left-0 z-50
              max-lg:left-1/2 max-lg:-translate-x-1/2
              w-[clamp(360px,55vw,720px)]
              h-[clamp(220px,35vw,420px)]
            "
          >
            <ModelViewer />
          </div>

          {/* CONTENT */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-10 relative z-10 w-full">
            {/* Left */}
            <div className="w-full lg:w-2/5 min-w-2/5 pr-0 lg:pr-8">
              <h2 className="text-[#ED1C24] text-3xl lg:text-4xl  font-[500] mb-6">
                Quality Policy
              </h2>
              <p className="text-gray-700 text-[16px] lg:text-lg leading-relaxed">
                At MAIL, quality is our foundation. Through a strong Total Quality
                Management System, we ensure every product is
                <span className="font-medium"> “First time right, every time right.”</span>
              </p>
            </div>

            {/* Right */}
            <div className="w-full lg:w-2/5 lg:ml-auto">
              <div className="grid grid-cols-2 gap-3 lg:gap-4 justify-items-center">
                {contents.map((item, index) => (
                  <div
                    key={index}
                    className="
                      bg-[#F7F5F5]
                      p-4 rounded-2xl shadow-md
                      flex flex-col items-center justify-center
                     aspect-square
                      text-center
                      border border-gray-100
                    "
                  >
                    <img
                      src={item.image}
                      alt="quality icon"
                      className="w-[24px] h-[24px] mb-3"
                    />
                    <p className="text-gray-700 text-sm leading-tight">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="block lg:hidden w-full mt-10 mb-10 px-4">
        <div className="bg-[#F5F5F5] rounded-3xl p-6 shadow-lg border-2 border-[#F5EDED]">
          {/* Header */}
          <div className="mb-8 text-center">
            <h2 className="text-[#ED1C24] text-2xl sm:text-3xl font-[500] mb-4">
              Quality Policy
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              At MAIL, quality is our foundation. Through a strong Total Quality
              Management System, we ensure every product is
              <span className="font-medium"> “First time right, every time right.”</span>
            </p>
          </div>

          {/* Cards */}
          <div className="flex justify-center mb-8">
            <div className="grid grid-cols-2 gap-4 max-w-sm">
              {contents.map((item, index) => (
                <div
                  key={index}
                  className="
                    bg-white p-4 rounded-2xl shadow-md
                    flex flex-col items-center justify-center
                    h-[140px] sm:h-[160px]
                    text-center
                    border border-gray-100
                  "
                >
                  <img
                    src={item.image}
                    alt="quality icon"
                    className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] mb-2"
                  />
                  <p className="text-gray-700 text-xs sm:text-sm leading-tight">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile 3D Model */}
          <div className="flex justify-center">
            <div className="w-full max-w-md aspect-[16/9]">
              <ModelViewer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Policy;
