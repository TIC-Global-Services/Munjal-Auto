import rimImg1 from '../../assets/Facilities/rimImg1.png'
import rimImg2 from '../../assets/Facilities/rimImg2.png'
import rimImg4 from '../../assets/Facilities/rimImg4.png'
import manufactureimage from '../../assets/Facilities/motorcyclemanufacture.png'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const rimmanufacturing = () => {
    const rimManufacturingList = [
  {
    sectionTitle: "Disc Manufacturing",
    points: [
      "Blanking, piercing, trimming, forming, and related operations using mechanical presses ranging from 40 – 400 TON.",
      "High-precision hydraulic presses ranging from 25 – 160 TON for specialized forming requirements."
    ],
    image: rimImg1
  },
  {
    sectionTitle: "Testing Facilities",
    subtitle:"To ensure uncompromising quality, every rim undergoes rigorous online and offline testing.",
    points: [
      
      "Online Testing: Run-out measurement, low-point marking, and weld joint air leak tests.",
      "Offline Testing: Corner fatigue tester, radial fatigue tester, flange bend strength tester, butt weld joint air leak testing, and rim profile analysis."
    ],
    image: rimImg2
  },
  {
    sectionTitle: "Pretreatment & Painting",
    points: [
      "Nine-stage pretreatment and phosphating line",
      "Three-coat wet-on-wet painting",
      "CED painting facility"
    ],
    image: rimImg4
  }
];
  return (
    
    <div className="relative px-1">
       <div className="lg:mt-20 mt-8 lg:py-10">
                <div>
                    <h1 className="lg:text-[36px]  text-[24px] text-center lg:text-start w-[203px] lg:w-full  mx-auto">Steel Wheel Rim Manufacturing</h1>
                    <p className="lg:text-[20px] text-[14px] leading-[20px] lg:leading-[28px]  text-center lg:text-start lg:max-w-[1116px] mt-5 text-[#82848A] mb-7">
                      MAIL operates a state-of-the-art Steel Wheel Rim manufacturing facility, capable of producing wheel rims ranging from 10” to 14” for two-wheelers, three-wheelers, and four-wheelers. Built with cutting-edge technology and automated SPMs, our production line ensures consistency, durability, and precision in every rim manufactured.
                    </p>
                </div>
            </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: '.rim-next ',
          prevEl: '.rim-prev'
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          }
        }}
        className="rim-carousel"
      >
        {rimManufacturingList.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative max-h-[500px]">
              <img
                src={item.image}
                height={500}
                width={750}
                alt="rim manufacturing"
                className="w-full lg:h-[500px] h-[400px] object-cover rounded-[8px]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent rounded-[8px] flex flex-col items-start p-6">
                <h1 className='text-[#FF0000] lg:text-[26px] text-[20px] font-bold mb-4'>{item.sectionTitle}</h1>
                <p className='text-white'>{item.subtitle}</p>
                <ul className="list-disc ml-6 max-w-[515px]">
                  {item.points.map((point, i) => (
                    <li key={i} className='font-light text-white lg:leading-[30px] leading-[24px] lg:text-[16px] text-[14px]'>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex gap-2 absolute right-0 mt-5 z-10">
               <ArrowLeft color="#ffffff" strokeWidth={1.5} absoluteStrokeWidth className='rim-prev bg-[#ED1C24] rounded-full p-2 w-10 h-10 cursor-pointer'/>
               <ArrowRight color="#ffffff" strokeWidth={1.5} absoluteStrokeWidth className='rim-next bg-[#ED1C24] rounded-full p-2 w-10 h-10 cursor-pointer'/>
          </div>
          <div className="mt-20 py-10">
                <div>
                    <h1 className="lg:text-[36px]  text-[24px] text-center lg:text-start w-[203px] lg:w-full  mx-auto">Motorcycle Rim Manufacturing</h1>
                    <p className="lg:text-[20px] text-[14px] leading-[20px] lg:leading-[28px]  text-center lg:text-start lg:max-w-[1116px] mt-5 text-[#82848A]">
                     Our dedicated Motorcycle Rim Manufacturing Line is equipped with the latest automated technology to deliver high-quality rims with superior finish, strength, and accuracy. Each rim undergoes meticulous processing and testing to ensure it meets global standards of safety, durability, and performance.
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-1 items-center lg:grid-cols-2 gap-3'>
              <div className='lg:w-[600px] h-[400px] overflow-hidden rounded-lg'>
                <img src={manufactureimage} width={871.5} height={400} alt='Motorcycle Rim Manufacturing Unit' className="w-full h-full object-cover object-left"/>
              </div>
              <div className='mt-5'>
                <h1 className='lg:text-[26px] text-[20px] text-[#ED1C24] font-semibold'>Dedicated Motorcycle Rim <br/>
Manufacturing Line</h1>
              <ul  className="list-disc ml-6 text-[#82848A] text-[14px] lg:text-[16px] leading-[20px] mt-5 lg:mt-3 lg:leading-[34px]">
                <li>Roll Forming: Multi-stage, state-of-the-art rim profile forming rolling mills from the UK, Japan, and Taiwan</li>
                <li>Welding: High-performance Butt Welding SPM for strong and reliable joints</li>
                <li>Polishing: Multi-stage, fully automatic profile grinding and polishing SPM from Italy for superior finish.</li>
                <li>Plating: Fully automatic 34-stage Tri Nickel Chrome plating plant for long-lasting shine and corrosion resistance.</li>
              </ul>
              </div>
            </div>
    </div>
    
  )
}

export default rimmanufacturing